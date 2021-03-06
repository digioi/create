# rollup modern app

This configuration assumes that the developer works with a modern browser, compatible with mjs modules and dynamic import `import("...")`, additionally offers optional support to Typescript

> If your browser does not support dynamic import, consider using as polyfill [Shimport](https://github.com/Rich-Harris/shimport).

> this configuration has been generated by `npm init @atomico`

## Script

```bash
# development mode
npm run dev
# production mode
npm run build
```

## Directory

```bash
/src
  index.js #entry code
/test
/public #single-app
  /dist #this directory is removed with each rollup cycle
  /img
  index.html
  manifest.json
  sw-pwa.js #pwa service worker
```

## package.json

By default, rollup loads the initial configuration from package.json:

```bash
{
  "input": "src/index.js", # define the input file for rollup
  "output": "public/dist", # define the output directory
}
```

## support

### CSS

The css is supported by the plugin [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss), this librarian allows to extract the css from the

```js
// inline inject css
import "style.js";
// get string css
import css from "style.css";
```

### JS Y TS

supported by [rollup-plugin-sucrase](https://github.com/rollup/rollup-plugin-sucrase), this library allows manipulation of non-standardized JS and TS code.

### pwa

The given configuration is intended for the development of single apps pwa, you should only uncomment in index
the next line, to enable the server worker.

```html
<!--Delete comment to activate PWA
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
-->
```

## test

The test stack is based on [karma](https://karma-runner.github.io/latest/index.html), [jasmine](https://jasmine.github.io/) and chrome, check the `/test` folder this has a small example of use
