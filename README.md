<h1 align="center"> a collection of scripts to use pw app efficiently </h1>
a collection of scripts to use pw app efficiently

## usage

-   Open `dist/index.js` and copy all of it's contents.
-   Open PW's Website and login.
-   Open the lecture/video you want to watch
-   Play the video and pause it once.
-   Press Ctrl + Shift + I to open Inspect Element Window.
-   Head over to the Console tab.
-   Paste the code you copied earlier and press enter.
-   Done :D

Alternatively, you can copy and paste this code in your console.

```js
fetch(
    "https://raw.githubusercontent.com/NaviTheCoderboi/pw-utils/main/dist/index.js"
)
    .then((res) => res.text())
    .then((code) => new Function(code)());
```

## features

-   opens poll sidebar automatically when poll appears

> [!NOTE]  
> `MutationObserver` api should be supported by your browser.

-   use shortcuts like `a` , `b` , `c` , `d`, `enter` to answer poll questions
-   use shortcuts like `alt` + `p` to open poll sidebar

> [!NOTE]
> you can customize the shortcuts by editing `src/index.ts` to change shortcuts and rebuild the project
