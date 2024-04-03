/**
 * 编写顺序执行任务
 * 
 * 1. 任务1： 每次只更新最旧的文件50个，解析出的创建时间, 更新时间。然后创建时间为当前时间减去1天，更新时间为当天时间
 * 2. 任务2： 执行 yarn run publish
 */

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('child_process');

const maxPostCount = 20 * 1000;
const newPostSaveRootDir = '/home/ian/_tmp_group';

function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
          getMarkdownFiles(filePath, fileList);
      } else if (path.extname(file) === '.md') {
          fileList.push(filePath);
      }
  });

  return fileList;
}

const updatePostsTask = () => {
    // 任务1：检测 source/_posts 目录下的所有.md文件，统计数量，如果数小于 < 20000 个, 拷贝新的.md文件到该目录下
    // 任务2：更新最旧的50个.md文件，更新时间为当前时间，创建时间为当前时间减去1天
    console.log('新增文件及更新最旧的50个文件');

    const postsDir = path.join(__dirname, 'source/_posts');

    // 编写代码获得 source/_posts 目录下，包括子孙目录下的所有.md文件
    const posts = getMarkdownFiles(postsDir);
    posts.sort((a, b) => {
        const aStat = fs.statSync(a);
        const bStat = fs.statSync(b);

        return aStat.birthtime - bStat.birthtime;
    });

    const updateDateWithContent = (content) => {
        // 时间为当前时间的前一天
        const createDate = new Date();
        createDate.setDate(createDate.getDate() - 1);
        const updateDate = new Date();


        let newContent = content.replace(/date: .*/, `date: ${createDate.toISOString()}`);
        newContent = newContent.replace(/updated: .*/, `updated: ${updateDate.toISOString()}`);

        return newContent;
    }

    // 任务1
    if (posts.length < maxPostCount) {
        // 获得当前目录的名称, // 去掉前缀 'site-'
        const dirName = path.basename(__dirname).replace(/^site-/, '');

        // 源目录的位置
        const sourceDir = path.join(newPostSaveRootDir, dirName);

        if (!fs.existsSync(sourceDir)) {
            console.error(`💥错误: 目录 ${sourceDir} 不存在，忽略`);
        } else {
            // 目标目录的位置
            const targetDir = path.join(__dirname, 'source/_posts');

            // 每次至少拷贝20个文件
            const new_posts = getMarkdownFiles(sourceDir);

            const new_files = new_posts.slice(0, 20);
            new_files.forEach(file => {
                const sourceFile = file;
                const targetFile = path.join(targetDir, file.replace(sourceDir, ''));

                const targetDir = path.dirname(targetFile);
                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }

                if (!fs.existsSync(targetFile) && fs.existsSync(sourceFile)) {
                    try {
                        fs.copyFileSync(sourceFile, targetFile);
                        console.log(`拷贝 ${sourceFile} -> ${targetFile} 完成`)

                        // 删除源文件
                        if (fs.existsSync(targetFile)) {
                            fs.unlinkSync(sourceFile);

                            // 拷贝过去的文件也要更新一下时间
                            const content = fs.readFileSync(targetFile, 'utf-8');
                            const newContent = updateDateWithContent(content);
                            fs.writeFileSync(targetFile, newContent);
                        }
                    } catch (e) {
                        console.error(`拷贝 ${sourceFile} -> ${targetFile} 失败`)
                        console.error(e);
                    }
                } else {
                    console.warn(`文件 ${targetFile} 已经存在，忽略`)
                }
            });
        }
    }

    // 任务2
    const oldestPosts = posts.slice(0, 50);
    oldestPosts.forEach(post => {
        const postPath = post;
        const content = fs.readFileSync(postPath, 'utf-8');

        const newContent = updateDateWithContent(content);
        fs.writeFileSync(postPath, newContent);

        console.log(`更新 ${postPath} 完成`)
    });

}

const publishTask = () => {
    console.log(`当前目录为: ${__dirname}`);
    
    try {
        console.log('执行 yarn 安装依赖');
        execSync(`yarn install`, { cwd: __dirname });

        try {
          console.log('执行 git gc --prune=now');
          execSync(`git gc --prune=now`, { cwd: __dirname });
          execSync(`git gc --prune=now`, { cwd: `${__dirname}/.deploy_git` });
        } catch(e){}

        console.log('执行 yarn run publish');
        const child = execSync(`yarn run publish`, { cwd: __dirname });
        const { stdout, stderr } = child;
        console.log(`1.输出:\n ${stdout.toString()} \n`);
        console.log(`2.错误:\n ${stderr.toString()} \n`);
    } catch (e) {
        console.log(`代码错误:\n`);
        console.error(e);
    }
    console.log(`执行完成`)
}

const backupGit = () => {
    // 最多每10天备份一次，检测上一次备份的时间，如果超过10天，执行备份
    // 最近一次备份的时间，存储在 .backup-date 文件中
    const now = new Date();
    let enableBackup = false;
    const backupDateFile = path.join(__dirname, '.backup-date');


    if (fs.existsSync(backupDateFile)) {
        const content = fs.readFileSync(backupDateFile, 'utf-8');
        const lastBackupDate = new Date(content);
        enableBackup = now - lastBackupDate < 10 * 24 * 60 * 60 * 1000;

        if (!enableBackup) {
            console.log('距离上一次备份时间不到10天，忽略备份');
            return;
        }
    } else {
        enableBackup = true;
        console.log(`第一次备份`);
    }

    if (!enableBackup) return;

    console.log('准备备份 git 仓库');
    try {
        // 所有文件启动 lfs
        execSync(`git lfs install`, { cwd: __dirname });

        // 跟踪大文件
        execSync(`git lfs track "*.mp4"`, { cwd: __dirname });
        execSync(`git lfs track "*.zip"`, { cwd: __dirname });
        execSync(`git lfs track "*.tar.gz"`, { cwd: __dirname });
        execSync(`git lfs track "*.gz"`, { cwd: __dirname });
        execSync(`git lfs track "*.rar"`, { cwd: __dirname });
        execSync(`git lfs track "*.xml"`, { cwd: __dirname });

        const out = execSync(`git add . && git commit -m "auto backup on ${now.toISOString()}" && git lfs push origin main`, { cwd: __dirname });
        console.log(out.toString());

        // 更新备份时间
        fs.writeFileSync(backupDateFile, now.toISOString());
        console.log(`备份完成`);
    } catch (e) {
        console.error(e);
        console.log(`备份失败，下一次再执行备份`)
    }
}

// 执行任务队列
updatePostsTask();
publishTask();
backupGit();



