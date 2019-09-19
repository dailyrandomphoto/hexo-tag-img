'use strict';

const { htmlTag, url_for } = require('hexo-util');
const escapeHtml = require('escape-html');
const unescape = require('unescape');

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;

/**
* Image tag
*
* Syntax:
*   {% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
*/
module.exports = ctx => {
  const urlFor = url_for.bind(ctx);

  return function imgTag(args, content) {
    const classes = [];
    let src;

    // Find image URL and class name
    while (args.length > 0) {
      const item = args.shift();
      if (rUrl.test(item) || item[0] === '/') {
        src = urlFor(item);
        break;
      } else {
        classes.push(item);
      }
    }

    let width, height, title, alt;

    // Find image width and height
    if (args && args.length) {
      if (!/\D+/.test(args[0])) {
        width = args.shift();

        if (args.length && !/\D+/.test(args[0])) {
          height = args.shift();
        }
      }

      // Find image title and alt
      title = escapeHtml(unescape(args[0]));
      alt = escapeHtml(unescape(args[1]));
    }

    const attrs = {
      src,
      class: classes.join(' ') || null,
      width,
      height,
      title,
      alt
    };

    return htmlTag('img', attrs);
  };
};
