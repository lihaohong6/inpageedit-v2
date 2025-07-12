A fork of https://github.com/inpageedit/inpageedit-v2.
## Usage
```javascript
mw.loader.load("https://cdn.jsdelivr.net/gh/lihaohong6/inpageedit-v2@9c28af01e33371d7e765e186827a53a4016c99a3/in-page-edit.js");
```

## Build
For testing
```shell
npm run build:full
```
For deployment
```shell
npm run build:compressed
```

## Changes
- Remove telemetry.
- Embed plugins, stylesheets, and localization files to avoid making requests that violate Miraheze's CSP.

## Known issues
CodeMirror doesn't work because it loads scripts and stylesheets from urls not in the CSP whitelist. 
