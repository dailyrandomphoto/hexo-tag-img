# hexo-tag-img
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

Inserts an image with specified size.

This is a [Hexo image tag plugin](https://hexo.io/docs/tag-plugins#Image) extension.
After installing this plugin, the original `img` tag plugin will be replaced by this tag plugin.

## Installation
```
npm install --save hexo-tag-img
```

## Syntax
Inserts an image with specified size.
```
{% img [class names] /path/to/image [width] [height] "title text" "alt text" %}
{% image [class names] /path/to/image [width] [height] 'title text' 'alt text' %}
```
- `'`, `"` symbols are allowed in title and alt.
- `title` and `alt` must be quoted with `"` or `'`.
- For security concerns, the value of attributes will be escaped.

## Syntax of the Original Version
Inserts an image with specified size. [See more](https://hexo.io/docs/tag-plugins#Image)
```
{% img [class names] /path/to/image [width] [height] "title text 'alt text'" %}
{% image [class names] /path/to/image [width] [height] "title text 'alt text'" %}
```

### Issues of this version
- Can't use `'`, `"` symbols in title and alt. Should use escaped text `&#39;`, `&quot;`.
- The value of title and alt is not escaped.

## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/hexo-tag-img
[travis-url]: https://travis-ci.org/dailyrandomphoto/hexo-tag-img
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/hexo-tag-img?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-tag-img
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-tag-img?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/hexo-tag-img.svg
[npm-version-image]: https://img.shields.io/npm/v/hexo-tag-img.svg
[license-image]: https://img.shields.io/npm/l/hexo-tag-img.svg
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/hexo-tag-img/master
[coveralls-image]: https://coveralls.io/repos/github/dailyrandomphoto/hexo-tag-img/badge.svg?branch=master
[dependencies-image]: https://david-dm.org/dailyrandomphoto/hexo-tag-img/status.svg
[devDependencies-image]: https://david-dm.org/dailyrandomphoto/hexo-tag-img/dev-status.svg
