# React book reader component

[![Build and test status](https://github.com/imrodriguez/browser-book-reader/workflows/Lint%20and%20test/badge.svg)](https://github.com/imrodriguez/browser-book-reader/actions?query=workflow%3A%22Build+and+test%22) [![tested with testing library](https://img.shields.io/badge/tested%20with-testing--library-green.svg)](https://testing-library.com/)

React component that allows you to set a PDF reader in your website with some features like: Read PDF in black mode, expand the PDF to fullscreen, download the file and bookmark it.

* [TypeScript 4](https://www.typescriptlang.org/)
* Linting with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) ([tslint](https://palantir.github.io/tslint/) is deprecated)
* Testing with [Testing-library](https://testing-library.com/)
* Continuous integration ([GitHub Actions](https://docs.github.com/en/actions))
* Docs with Storybook [TypeDoc](https://storybook.js.org/)

## Demo
A minimal demo page can be found in our storybook documentation. [Online demo](https://imrodriguez.github.io/browser-book-reader)

## Getting Started

### Installation
```bash
npm i browser-book-reader
# Or
yarn add browser-book-reader
...
```
### Usage
Here's an example of basic usage:

```javascript
  import React from 'react';
  import { BookReader } from 'browser-book-reader';

  function myApp() {
    const onDownload = () => {
      // do something
    };

    return (
      <BookReader
        file="somefile.pdf"
        mode="full"
        onDownload={onDownload} 
      />
    )
  }
```

## User guide

### BookReader
Displays a reader of a file.

|Prop name|Description|Default value|Example values|
|----|----|----|----|
file|The PDF that will be display in the reader. The file can be an url or a file imported (imported using import ... from ... or from file input form element)|n/a|<ul><li>URL:<br />`"http://example.com/sample.pdf"`</li><li>File:<br />`import sample from '../static/sample.pdf'` and then<br />`sample`</li><li>Parameter object:<br />`{ url: 'http://example.com/sample.pdf', httpHeaders: { 'X-CustomHeader': '40359820958024350238508234' }, withCredentials: true }`</ul>|
mode|The mode that will be diplay the document. Can be displayed page by page with controls to change the page or it can be displyed as a full document with an scroll. Can be "divided" or "full"|"divided"|"divided" or "full"|
bookmarked|A boolean that indicates to the reader if the book is bookmarked. Can be true or false|n/a|true or false|
onDownload|The callback function that will be executed when the user press the download button. If this function is not provided the button doesn't appears|n/a|() => { downloadPDF();}|
onBookMark|The callback function that will be executed when the user press the bookmark button. If this function is not provided the button doesn't appears|n/a|() => { bookmark();}|
barColor|String to set the color of the bottom bar that contains the action buttons|n/a|"#fff"|
styles|String with styles that will be applied to the wrapper of the reader|n/a|"background: #fff; color: #000"|
