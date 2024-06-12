/**
 * 修复 .markdown 文件中的问题
 *
 * 1. 修复前3行的包含这样的内容的行：`title: | `, 去掉 `|` 这样的字符
 */

const fs = require('fs');
const path = require('path');
const { removeDuplicatedLinesQuick } = require('./remove-duplicated-lines');
/**
 * 获得指定目录下所有的 .md 文件
 * @param {*} dir
 * @param {*} fileList
 * @returns
 */
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

/**
 * 修复指定的 markdown 文件
 * @param {*} markdownFile
 */

function fixMarkdownFile(markdownFile) {
    const content = fs.readFileSync(markdownFile, 'utf-8');
    if (content.length > 40 * 1000 // 大于40k的文件
      && !content.includes(`atpl-alsoreadstyle`)) { // 不包含 atpl-alsoreadstyle 的文件
      // 直接删除文件
      fs.unlinkSync(markdownFile);
      return;
    }

    let newContent = content;
    try {
      newContent = removeDuplicatedLinesQuick(content, {
        minLength: 600,
        minLineCount: 7,
      })
    } catch (error) {
      console.error('error:', error);
    }

    fs.writeFileSync(markdownFile, newContent, 'utf-8');
}

// 如果命令行参数中包含 --file，则只处理指定的文件
const args = process.argv.slice(2);
if (args.includes('--file')) {
  // 从命令行参数中获取指定的文件
  const index = args.indexOf('--file');
  const markdownFile = args[index + 1];
  fixMarkdownFile(markdownFile);
  console.log('Fix markdown issue done!');
  return;
}



function removeAlsoRead(markdownFile) {
  let content = fs.readFileSync(markdownFile, 'utf-8');
  const alsoReadReg = /<span class="atpl-alsoreadstyle">Also read:<\/span>[\s\S]*?<\/div>/g;

  if (!alsoReadReg.test(content)) {
    return;
  }

  content = content.replace(alsoReadReg, '');
  fs.writeFileSync(markdownFile, content, 'utf-8');
  console.log('Remove also read for file:', markdownFile);
}

const markdownFiles = getMarkdownFiles(path.join(__dirname, 'source/_posts'));
markdownFiles.forEach((markdownFile, index) => {
    console.log(`[${index + 1}/${markdownFiles.length}] Fix markdown issue for file: ${markdownFile}`);
    if (args.includes('--remove-also-read')) {
      removeAlsoRead(markdownFile);
    }
    fixMarkdownFile(markdownFile);
});

console.log('Fix markdown issue done!');
