# Bootstrap Webpage Template

[![Greenkeeper badge](https://badges.greenkeeper.io/VladimirDev93/Website-Template.svg)](https://greenkeeper.io/) 
[![Build Status](https://travis-ci.org/VladimirDev93/Website-Template.svg?branch=master)](https://travis-ci.org/VladimirDev93/Website-Template)
[![Dependency Status](https://david-dm.org/VladimirDev93/Website-Template/status.svg)](https://david-dm.org/VladimirDev93/Website-Template)
[![devDependencies Status](https://david-dm.org/VladimirDev93/Website-Template/dev-status.svg)](https://david-dm.org/VladimirDev93/Website-Template?type=dev)

The basic setup for Bootstrap web page. It's not rocket science, it's just copy/paste code. I made this so that everytime when I'm working on a new project, I don't have to type the links for stylesheets in the head tag everytime and basically I don't have to set up the basic HTML template everytime.

# Instalation


1. Open the terminal in ``Website Template`` directory, and enter the following command first.
```bash
sudo npm i 
```

2. Run the following command in your terminal, in your **current working directory**, in order to configure ESLint file.
```bash
npm run eslint
```
3. Navigate to `src` folder and edit your files from there.
After you start developing, run this command in your terminal in order to see your code in your default browser.
```bash
npm run start
```

If you don't know how ES7 (ECMAScript 2016) code looks like, it looks something like this

```javascript
// Importing libraries
import className from 'javascriptlibrary';

// Declaring variables
let mssg = 'Hello World!';
const button = document.getElementById('btn');

// Arrow function
var showMessage = () => alert(mssg);

// Promises (async)
var get = url => {
  return new Promise((resolve, reject) => {
    // JSON GET Method
  });
}
let promise = get('URL');
promise.then(() => {
   // code
}).then(() => {
   // code
}).catch(() => {
  // if error
});

// onload event
self.addEventListener('load', showMessage());
```

You can't write code like that and use it in your browser because web browsers don't support ES7 code yet. You need a compiler for that. In this project, I've implemented **Babel**. See the [documentation]("https://github.com/babel/babel") for more info.

Starting from **Google Chrome v61+**, **ES6** is compiled natively.

# Info about the upcoming "React.js IDE"

If you are working on a React.js website, there is now an IDE for React.js development. Go and check it out : <https://github.com/reactide/reactide>

# Licence

MIT License

Copyright (c) 2017 Vladimir Jovanović

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
