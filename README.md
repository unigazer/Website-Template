# Bootstrap Webpage Template

The basic setup for Bootstrap web page. It's not rocket science, it's just copy/paste code. I made this so that everytime when I'm working on a new project, I don't have to type the links for stylesheets in the head tag everytime and basically I don't have to set up the basic HTML template everytime.

# Configuration

First, install the `npm` package manager : <https://nodejs.org/>

Then open up command line and type :

```bash
npm i -g lite-server
```

After that, go to ''Website-Template'' repository and type :

```bash
lite-server
```

That's it. Your development environment is now set up.

# Usage


1. Open the terminal in ``Website Template`` directory, and enter the following command first.
```bash
sudo npm i 
```

2. Run the following command in your terminal, in your **current working directory**, in order to configure ESLint file.
```bash
eslint --init
```
3. Navigate to `src` folder and edit your files from there.
After you start developing, run this command in your terminal in order to see your code in your default browser.
```bash
npm run build
```
Run this command every time you want to see compiled ES7 JavaScript code.

If you don't know how ES7 (ECMAScript 2016) code looks like, it looks something like this

```javascript
// Importing libraries
import className from 'javascriptlibrary'

// Declaring variables
const mssg = "Hello World!";
let button = document.getElementById('btn');

function showMessage() {
  alert(mssg);
}

button.addEventListener('click', showMessage());
```

You can't write code like that and use it in your browser because web browsers don't support ES7 code yet. You need a compiler for that. In this project, I've implemented **Babel**. See the [documentation]("https://github.com/babel/babel") for more info.

Starting from **Google Chrome v61+**, **ES6** is compiled natively.

I also **recommend** importing these so that your images scale **properly** on every device. These are only for the landing page.

```html
 <picture>
   <!-- Full HD Resolution -->
   <source srcset="https://placehold.it/1920x1080" media="(min-width: 1920px)" />
   <!-- Samsung Galaxy S7 Edge -->
   <source srcset="https://placehold.it/1442x2562" media="(min-width: 1442px)" />
   <!-- HiDPI Laptop -->
   <source srcset="https://placehold.it/1440x900" media="(min-width: 1440px)" />
   <!-- Common Resolution -->
   <source srcset="https://placehold.it/1366x768" media="(min-width: 1366px)" />
   <!-- 4:3 (Old CRT monitors) -->
   <source srcset="https://placehold.it/1280x1024" media="(min-width: 1280px)" />
   <!-- iPad Pro -->
   <source srcset="https://placehold.it/1024x1366" media="(min-width: 1024px)" />
   <!-- iPad -->
   <source srcset="https://placehold.it/768x1024" media="(min-width: 768px)" />
   <!-- iPhone 6 Plus -->
   <source srcset="https://placehold.it/414x736" media="(min-width: 414px)" />
   <!-- Google Nexus 5X -->
   <source srcset="https://placehold.it/412x732" media="(min-width: 412px)" />
   <!-- iPhone 6 -->
   <source srcset="https://placehold.it/375x667" media="(min-width: 375px)" />
   <!-- iPhone 5 -->
   <source srcset="https://placehold.it/320x568" media="(min-width: 320px)" />
   <!-- If the browser doesn't support "srcset" attribute, then load the default resolution -->
   <img src="https://placehold.it/1366x768" alt="Background"/>
 </picture>
```

If you don't want to write code for responsive images in `HTML`, you can also do it in `CSS`

```css
  img {
    background-image: url('path-to-image');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: auto;
  }
```

# Info about the upcoming "React.js IDE"

If you are working on a React.js website, there is now an IDE for React.js development. Go and check it out : <https://github.com/reactide/reactide>

# Licence

MIT License

Copyright (c) 2017 Vladimir Jovanović

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
