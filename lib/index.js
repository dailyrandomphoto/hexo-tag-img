'use strict';

module.exports = ctx => {
  const { tag } = ctx.extend;

  const img = require('./img')(ctx);

  tag.register('img', img);
  tag.register('image', img);
};
