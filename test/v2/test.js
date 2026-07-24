import fs from 'fs';
import path from 'path';

import defaultFunc from '../../index.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

import importRegex from './importRegex.js';

const k1 = defaultFunc({
    fileContent,
    importRegex,
    showLog: false,
    showLogStep1: false
});

console.log("ssssssssss : ", k1);

