# smiler (*sm*art comp*iler*)

**DISCLAIMER: This project is currently in development and it is not recommended to use it (yet).**

What?
Smiler searches for files which need to (scss, sass) or can be (js) compiled and puts them in one directory. You can specify a lot of options to customize behavior.

## install
`npm i smiler --save // or save-dev when you only want to install it in your dev environment`

## usage
```js
let smiler = require('smiler')

smiler({}) // compiles all files in all directories into the directory 'public/'
```

## api
You can customize behavior by specifying the following options when calling smiler:

**start**: String | [String]
Start a specific task or use an array to start multiple tasks.

Possible options: scss, js

```js
smiler({
    start: 'scss'
})
```
or
```js
smiler({
    start: ['scss', 'js']
})
```
