# hexo-tag-img
[![Downloads](https://img.shields.io/npm/dm/hexo-tag-img.svg)](https://www.npmjs.com/package/hexo-tag-img) [![npm](https://img.shields.io/npm/v/hexo-tag-img.svg)](https://www.npmjs.com/package/hexo-tag-img) [![LICENSE](https://img.shields.io/npm/l/hexo-tag-img.svg)](LICENSE)

Inserts an image with specified size.

This is a [Hexo image tag plugin](https://hexo.io/docs/tag-plugins#Image) extension.
After installing this plugin, the original `img` tag plugin will be replaced by this tag plugin.

## Installation
```
npm install --save hexo-tag-img
```

## Syntax of the Original Version
Inserts an image with specified size. [See more](https://hexo.io/docs/tag-plugins#Image)
```
{% img [class names] /path/to/image [width] [height] "title text 'alt text'" %}
{% image [class names] /path/to/image [width] [height] "title text 'alt text'" %}
```

### Issues of this version
- Can't use `'`, `"` symbols in title, alt. Should use escaped text `&#39;`, `&quot;`.
- The value of title and alt is not escaped.
