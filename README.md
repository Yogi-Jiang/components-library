# vue-ueditor

A Vue component for [ueditor](http://ueditor.baidu.com/website/).

## Installation

```
npm install git+https://github.com/Yogi-Jiang/components-library.git
```

## Dependency

* [vuejs@2.0](http://vuejs.org)
* [webpack2](https://webpack.js.org/)


## Instruction

page.js

```js
{
    "template": require("./page.html"),
    "components": {
        "ueditor": require("components/vue-ueditor")
    },
    "data": function () {
        return {
            editor: null,
            composition: '',
            UEConfig: {
                UEDITOR_HOME_URL: 'http://cdn.staticfile.org/ueditor/1.4.3/',
                themePath: 'http://cdn.staticfile.org/ueditor/1.4.3/themes/',
                customCssFile: 'static/iframe.css',
                serverUrl: 'static/nodejs/config.json',
                initialContent: '欢迎来到ueditor!',
                initialFrameWidth: 800,
                initialFrameHeight: 600,
                allowDivTransToP: false,
                pasteplain: true,
                imagePopup: true,
                autoFloatEnabled: true,
                topOffset: 50
            },
            businessConfig: {
                hideIcons: ['insertPano', 'insertPoi']
            },  
        }
    },
    "methods": {
        getEditor(editor) {
            editor.setContent(this.composition)
            this.editor = editor
        }
    }
}
```

page.html

```html
<ueditor :UEConfig="'UEConfig'" :businessConfig="businessConfig" @ready="getEditor"></krpano>
```

## Props

|Name|Description|Example|
|:--|:--|:--|
|`UEConfig`|ueditor config object, UEDITOR_HOME_URL and serverUrl are required|`UEConfig`|
|`businessConfig`|custom config, eg hide some custom icons|`businessConfig`|

## Events

|Name|Description|Example|
|:--|:--|:--|
|`ready`|trigger when ueditor is ready, the editor instance will be passed as first parameter for handle function|`getEditor`|

## About

For any question, please feel free to write email to yogi.jiang@hotmail.com