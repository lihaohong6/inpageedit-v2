A fork of https://github.com/inpageedit/inpageedit-v2.
## Usage
```javascript
mw.loader.load("https://meta.miraheze.org/wiki/User:PetraMagna/InPageEdit.js?action=raw&ctype=text/javascript")
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
