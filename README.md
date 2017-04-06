The basic setup for Bootstrap web page. It's not rocket science, it's just copy/paste code. I made this so that everytime when I'm working on a new project, I don't have to type the links for stylesheets in the head tag every time and basically I don't have to set up the basic HTML template everytime.

## Configuration

First, install the ``npm`` package manager : https://nodejs.org/

Then open up command line and type :

``npm install -g lite-server``

After that, go to ''Website-Template'' repository and type :

``lite-server``

That's it. Your development environment is now set up.

I also <b>recommend</b> importing these so that your images scale <b>properly</b> on every device.

```html
 <picture>
   <!-- Full HD Resolution -->
   <source srcset="https://placehold.it/1920x1080" media="(min-width: 1920px)" />
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
   <img src="https://placehold.it/1366x768" />
 </picture>
```

## Info about the upcoming "React.js IDE"

If you are working on a React.js website, there is now an IDE for React.js development.
Go and check it out : https://github.com/reactide/reactide
