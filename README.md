# smiler (*sm*art comp*iler*)

What?
Smiler searches for files which need to (scss, sass) or can be (js) compiled and puts them in one directory. You can specify a lot of options to customize behaviour.

## install
npm i smiler --save // or save-dev when you only want to install it in your dev environment

## usage
```js
let smiler = require('smiler')

smiler() // compiles all files in all directories into the directory 'public/'
```
