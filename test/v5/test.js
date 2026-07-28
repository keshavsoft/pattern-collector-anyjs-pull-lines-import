import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

import importRegex from './importRegex.js';

import extractRegex from './extractRegex.js';

const k1 = defaultFunc({
    fileContent, parseRegex: extractRegex.fromRoutesJs?.importRegex.parseRegex,
    searchRegex: extractRegex?.fromRoutesJs?.importRegex.searchRegex,
    fileType: "routesJs",
    showLog: true,
    showLogStep1: true
});

console.log("ssssssssss : ", k1);

