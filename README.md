# pattern-collector-anyjs-pull-lines-import 🔍

> **A powerful, configurable tool to scan JavaScript/ESM files and pull structured line matches matching route module import declarations.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-pull-lines-import.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-import)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-pull-lines-import.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-pull-lines-import](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-import)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-pull-lines-import](https://github.com/keshavsoft/pattern-collector-anyjs-pull-lines-import)
*   🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-pull-lines-import](https://keshavsoft.github.io/pattern-collector-anyjs-pull-lines-import/)

---

## 📖 Overview

`pattern-collector-anyjs-pull-lines-import` is a modular ES module used as a sub-module of `pattern-collector-anyjs-pull-lines`. It scans file contents to identify specific patterns (such as route module import declarations) and extracts line details, line numbers, variable names, and directory paths.

This library is particularly useful for building automated routing trees or auditing source code import patterns.

---

## ✨ Features

- **🏷️ Line Tracking**: Identifies exactly which line number each pattern appears on.
- **🧩 Custom Extraction Regex**: Extracts variables, directories, and paths using flexible capturing groups in your regular expressions.
- **📦 ESM Native**: Built for modern ES module environments.

---

## 🔗 Dependency Chain

*   [`pattern-collector-anyjs-extract`](https://www.npmjs.com/package/pattern-collector-anyjs-extract) - listed in [`package.json`](package.json) as `^1.4.6`.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-pull-lines-import
```

---

## 💻 Usage Example

Here is a quick example showing how to extract import patterns:

```javascript
import pullLinesImport from 'pattern-collector-anyjs-pull-lines-import';

const code = `
import { router as routerFromv1 } from "./v1/routes.js";
import { router as routerFromv2 } from "./v2/routes.js";
`;

const result = pullLinesImport({
  fileContent: code,
  parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
  searchRegex: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
});

console.log(result);
/*
Output:
[
  {
    variable: 'routerFromv1',
    folderName: 'v1',
    line: 'import { router as routerFromv1 } from "./v1/routes.js";',
    lineNumber: 2
  },
  {
    variable: 'routerFromv2',
    folderName: 'v2',
    line: 'import { router as routerFromv2 } from "./v2/routes.js";',
    lineNumber: 3
  }
]
*/
```

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that parses the provided content and returns matching pattern details.

#### Parameters

An options object containing:

* **`fileContent`** `(string)`: The raw javascript source code string to analyze.
* **`searchRegex`** `(RegExp)`: Regular expression with `g` flag to search for import statements in the code.
* **`parseRegex`** `(RegExp)`: Regular expression with capture groups to extract specific variables (`variable`) and folder names (`folderName`).
* **`showLog`** `(boolean)` *(optional)*: When set to `true`, outputs intermediate matching arrays to the console.
* **`showLogStep1`** `(boolean)` *(optional)*: When set to `true`, outputs step-by-step extraction details.

#### Returns

* **`Array<Object>`**: An array of import matching objects.

Each item in the list has the following shape:
```typescript
{
  variable: string;    // Captured variable name from parseRegex
  folderName: string;  // Captured directory or value from parseRegex
  line: string;        // Full original line matching the search regex
  lineNumber: number;  // 1-indexed line number in the source file
}
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).

