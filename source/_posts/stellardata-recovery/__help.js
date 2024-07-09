const fs = require('node:fs');
const path = require('node:path');
const _ = require('lodash');
const gData = require('./__data.js');


const txt = `

Stellar Data Recovery for Windows
Stellar Data Recovery Professional for Windows
Stellar Data Recovery Technician for Windows
Stellar Data Recovery Professional for Mac
Stellar Photo Recovery for Windows
Stellar Photo Recovery for Mac
Stellar Repair for Outlook Professional[Lifetime]
Stellar Repair for Exchange Corporate
Stellar Repair for MS SQL [Lifetime]
Stellar Repair for Excel
Stellar Repair for Photo-Mac
Stellar Repair for Photo-Windows
Stellar Speedup Mac - Single License
Stellar Converter for MBOX
Stellar Converter for EDB Corporate (Upto 50 Mailboxes)
Stellar Converter for OST Corporate
Stellar Repair for QuickBooks Software Technician-Windows-EN
Stellar Converter for Audio Video 1-Year Subscription
Stellar Repair for Video Premium-Windows
Stellar Repair for Video Premium-Mac
Stellar Converter for OLM Standard
Stellar Repair for Word
Stellar Repair for PowerPoint
Bundle Repair for Outlook
Stellar Converter for Outlook - Mac [1 Year Subscription]
Stellar Converter for NSF Corporate (Upto 50 Mailboxes)-v5.0-EN
Stellar Repair for Access
Stellar Converter for Apple Mail v2.0-EN [Lifetime]
Stellar Data Recovery for Linux
Stellar Data Recovery for iPhone-Windows
Stellar Repair for Video-Mac
Stellar Data Recovery for Virtual Machine [1 Year Subscription]
Stellar Converter for DBX [1 Year Subscription]
Stellar Converter for Outlook
Stellar Password Recovery for Window Server
Stellar Password Recovery for Outlook
Stellar Repair for MySQL Technician
Stellar Toolkit for Outlook
Stellar Deduplicator for Outlook
Stellar Converter for DBX - Technician [1 Year Subscription]
Stellar Converter for MBOX - Technician
Stellar Converter for OLM Technician
Stellar Converter for NSF Technician-v4.0-EN
Stellar Splitter for Outlook
Stellar Photo Recovery Professional for Windows
Stellar Photo Recovery Professional for Mac
Stellar File Eraser
Stellar Converter for Audio Video - Mac 1-Year Subscription
Stellar Data Recovery for iPhone-Mac
Stellar Repair for Video Windows
Stellar Repair for PDF
Stellar Repair for PDF-Mac
Stellar Repair for OLM v2.0-SOHO-EN
Stellar Toolkit for File Repair
Stellar Undelete Email for Outlook
Stellar Repair for SharePoint Server v3.0-Technician-EN
Stellar Merge Mailbox for Outlook
Stellar Toolkit for Exchange [Lifetime]
Stellar Toolkit for MS SQL [1 Year]
Stellar Converter for Office 365
Stellar Database Bundle
Stellar Repair for MS SQL Technician[Lifetime]
Stellar Repair for Outlook Technician[Lifetime]
Stellar Data Recovery Premium for Mac
Stellar Converter for OST Technician
Stellar Repair for Video Professional-Windows
Stellar Repair for Video Professional-Mac
Stellar Photo Recovery Premium for Windows
Stellar Photo Recovery Premium for Mac
Stellar Toolkit for Data Recovery 1-Year Subscription
Stellar Data Recovery Premium for Windows
Bundle Stellar Repair For Photo & Video
Stellar Data Recovery Technician for Mac
Stellar Data Recovery for iPhone Technician-Windows
Stellar Repair for Exchange Technician [Lifetime]
Stellar Data Recovery Professional for Windows [LifeTime]
Stellar Data Recovery Premium for Windows [LifeTime]
Stellar Data Recovery Professional for Mac [Lifetime]
Stellar Data Recovery Premium for Mac [Lifetime]
Bundle Stellar Data Recovery for Windows + Bitraser File Eraser
Bundle Stellar Data Recovery Windows Professional+
Bundle Stellar Data Recovery Windows Premium+
Bundle Stellar Data Recovery Mac Professional+
Bundle Stellar Data Recovery Mac Premium+
Stellar Toolkit For Outlook [Lifetime]
Stellar Photo Recovery Standard Windows (Chinese) [1 Year Subscription]
Bundle Stellar Data Recovery Mac Premium + iPhone Data Recovery Mac
Bundle Stellar Data Recovery Premium [Mac+Win]
BitRaser File Eraser – Mac
Stellar Data Recovery Premium for Mac [2 Year Subscription]
Stellar Data Recovery Premium for Windows [2 Year Subscription]
Stellar Converter for EDB Corporate
Stellar Data Recovery For Windows Free Edition
Stellar Repair for SQL Anywhere - Technician
Stellar Data Recovery for Windows [30 Days]
Stellar Data Recovery Professional for Windows [30 Days]
Stellar Data Recovery Premium for Windows [30 Days]
Stellar Repair for Photo Professional-Windows
Stellar Repair for Photo Professional-Mac
Stellar Repair for Photo Premium-Mac
Stellar Repair for Outlook Professional[1 year]
Stellar Repair for Outlook Technician[1 year]
Stellar Toolkit for iPhone-Windows
Stellar Toolkit for iPhone-Mac
Stellar Toolkit for Exchange [1 year Subscription]
Stellar Repair for QuickBooks Software Technician + Professional File Repair Services
inPixio Photo Editor
Stellar Data Recovery Mac Free
Stellar Data Recovery for Windows
Stellar Password Recovery for Windows
Stellar Password Recovery Technician for Windows
Stellar Photo Recovery Technician for Windows
Stellar Photo Recovery Technician for Mac
Stellar Log Analyzer for MS SQL
Ashampoo Backup Pro 16
Ashampoo WinOptimizer 19
Bundle Stellar Data Recovery Standard + Ashampoo Win Optimizer
Stellar Data Recovery for Windows [Lifetime]
Stellar Data Recovery for Mac
Stellar Data Recovery for Mac [Lifetime]
Steganos Password Manager
Stellar Toolkit for iPhone 50-iPhones-Windows
Stellar Toolkit for iPhone 50-iPhones-Mac
Stellar Repair for MS SQL
Repair for MS SQL
Stellar Repair for Video Professional-Mac
Stellar Repair for Video Professional Windows
Stellar Photo Recovery Premium for Windows [2 Year Subscription]
Stellar Photo Recovery Premium for Mac [2 Year Subscription]
Stellar Repair for MS SQL Technician
Stellar Toolkit for MS SQL
Stellar Data Recovery for Tape
Stellar Repair for Access Technician
Stellar Data Recovery Technician for Windows [3 Year]
Stellar Toolkit for Data Recovery [3 Year]
Bundle Stellar Data Recovery Standard + Ashampoo Backup Pro
Stellar Data Recovery for Windows(Upgrade)
Stellar Merge Mailbox for Outlook Technician
Stellar Toolkit for File Repair Technician
Stellar Data Recovery Technician for Windows V11.0.0.7 [Lifetime]
Stellar Toolkit for Data Recovery [Lifetime]
Stellar Drive Monitor
Abelssoft Converter4Video
Sticky Password
Stellar Black Friday Bundle - 83% Off
Stellar Repair for Video Premium Windows
Stellar Eraser for iPhone
Stellar Data Recovery for Android
Super Saver Bundle (Win)
Super Saver Bundle (Mac)
`;

const contentLines = _.uniq(txt.split('\n').map(v => v.trim()).filter(v => v.length > 0)).sort();

const fBuyUrl = (product) => {
  const map = gData.productBuyMap || {};
  return map[product] || '';
}

const lines = [
    "---",
    "title: Stellar All Products - Buy Now",
    "date: 2024-07-02T22:19:38.585Z",
    "description: Best Data Recovery Software Recover lost or deleted data from any Windows device and mac device",
    "thumbnail: https://www.stellarinfo.com/public/image/logo/stellar-logo.svg",
    "---",
];

const products = [];

//////////////////////////////////////
lines.push(...[
    "\n",
    "## Bundle",
    "\n",
])

contentLines.filter(v => v.includes('Bundle')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

//////////////////////////////////////
lines.push(...[
    "\n",
    "## Data Recovery",
    "\n",
])

contentLines.filter(v => v.includes('Data Recovery')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Photo Recovery",
    "\n",
])

contentLines.filter(v => v.includes('Photo Recovery')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Repair for Photo",
    "\n",
])

contentLines.filter(v => v.includes('Repair for Photo')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Repair for Video",
    "\n",
])

contentLines.filter(v => v.includes('Repair for Video')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Password Recovery",
    "\n",
])

contentLines.filter(v => v.includes('Password Recovery')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});


/////////////////////////////////////

lines.push(...[
    "\n",
    "## Repair for",
    "\n",
])

contentLines.filter(v => v.includes('Repair for')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Toolkit for",
    "\n",
])

contentLines.filter(v => v.includes('Toolkit for')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});

/////////////////////////////////////

lines.push(...[
    "\n",
    "## Converter for",
    "\n",
])

contentLines.filter(v => v.includes('Converter for')).forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});



lines.push(...[
    "\n",
    "## Others",
    "\n",
])

contentLines.forEach(v => {lines.push(`- [${v}](${fBuyUrl(v)})`) && contentLines.splice(contentLines.indexOf(v), 1); products.push(v);});


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



