const fs = require('node:fs');
const path = require('node:path');
const _ = require('lodash');
const gData = require('./__data.js');


const txt = `
 
YouCam Online Editor - 10 credits
YouCam Online Editor - 50 credits
YouCam Online Editor - 100 credits
YouCam Online Editor - 500 credits
YouCam Online Editor - 1000 credits
YouCam Online Editor - 2000 credits
YouCam Online Editor - 5000 credits
YouCam Online Editor - 10000 credits
YouCam Online Editor - 20000 credits
YouCam Online Editor - 100 credits/mo
YouCam Online Editor - 40 credits/mo
YouCam Online Editor - 100 credits/mo x 12
YouCam Online Editor - 1000 credits/mo
YouCam Online Editor - 1000 credits/mo x 12
YouCam Online Editor - 200 credits/mo
YouCam Online Editor - 2000 credits/mo
YouCam Online Editor - 5000 credits/mo
YouCam Online Editor - 10000 credits/mo
YouCam Online Editor - 20000 credits/mo
YouCam Online Editor - 50000 credits/mo
YouCam Online Editor - 200 credits/mo x 12
YouCam Online Editor - 40 credits/mo x 12
YouCam Online Editor - 2000 credits/mo x 12
YouCam Online Editor - 5000 credits/mo x 12
YouCam Online Editor - 10000 credits/mo x 12
YouCam Online Editor - 20000 credits/mo x 12
YouCam Online Editor - 50000 credits/mo x 12
YouCam Online Editor - 500 credits/mo x 12
YouCam Online Editor - 200 credits
YouCam Online Editor - 500 credits/mo
YouCam Online Editor - 500 credits/mo x 12
YouCam Online Editor - 200 credits
`;

const contentLines = _.uniq(txt.split('\n').map(v => v.trim()).filter(v => v.length > 0)).sort();

const fBuyUrl = (product) => {
  const map = gData.productBuyMap || {};
  return (map[product] || '').replace('https://secure.2checkout.com/order/checkout.php', 'https://secure.2checkout.com/order/cart.php');
}

const lines = [
    "---",
    "title: YouCam Online Editor All Products - Buy Now",
    "date: 2024-07-10T22:19:38.585Z",
    "description: Online AI Editor for Video, Photo, and others case.",
    "thumbnail: https://plugins-media.makeupar.com/smb/blog/post/2024-04-12/b9ca6f04-2fb4-4f60-add8-9c3c85cefc5e.jpg",
    "---",
];

const products = [];

//////////////////////////////////////
lines.push(...[
    "\n",
    "## All Products",
    "\n",
])

contentLines.filter(v => v.includes('YouCam Online Editor')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

lines.push('\n\n');


// save
fs.writeFileSync(path.join(__dirname, 'buy-now.md'), lines.join('\n'));


// out products config json
const dataLines = [];
dataLines.push(...[
  'const productBuyMap = {'
])
products.forEach(v => dataLines.push(`"${v}":"${fBuyUrl(v)}",`));
dataLines.push(...[
`
}

module.exports = {
	productBuyMap
}
`
]);

fs.writeFileSync(path.join(__dirname, '__data.js'), dataLines.join('\n'));



