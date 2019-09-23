'use strict';

const pathFn = require('path');
const cheerio = require('cheerio');

describe('img', () => {
  const Hexo = require('hexo');
  const hexo = new Hexo(pathFn.join(__dirname, 'img_test'));
  const img = require('../lib/img')(hexo);

  before(() => hexo.init());

  it('src', () => {
    const $ = cheerio.load(img(['https://placekitten.com/200/300']));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    should.not.exist($('img').attr('title'));
    should.not.exist($('img').attr('alt'));
  });

  it('src //', () => {
    const $ = cheerio.load(img(['//placekitten.com/200/300']));

    $('img').attr('src').should.eql('//placekitten.com/200/300');
  });

  it('internal src', () => {
    hexo.config.root = '/';
    let $ = cheerio.load(img(['/images/test.jpg']));
    $('img').attr('src').should.eql('/images/test.jpg');

    hexo.config.url = 'http://yoursite.com/root';
    hexo.config.root = '/root/';
    $ = cheerio.load(img(['/images/test.jpg']));
    $('img').attr('src').should.eql('/root/images/test.jpg');
  });

  it('class + src', () => {
    const $ = cheerio.load(img('left https://placekitten.com/200/300'.split(' ')));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
  });

  it('class + internal src', () => {
    hexo.config.root = '/';
    let $ = cheerio.load(img('left /images/test.jpg'.split(' ')));
    $('img').attr('src').should.eql('/images/test.jpg');
    $('img').attr('class').should.eql('left');

    hexo.config.url = 'http://yoursite.com/root';
    hexo.config.root = '/root/';
    $ = cheerio.load(img('left /images/test.jpg'.split(' ')));
    $('img').attr('src').should.eql('/root/images/test.jpg');
    $('img').attr('class').should.eql('left');
  });

  it('multiple classes + src', () => {
    const $ = cheerio.load(img('left top https://placekitten.com/200/300'.split(' ')));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left top');
  });

  it('multiple classes + internal src', () => {
    hexo.config.root = '/';
    let $ = cheerio.load(img('left top /images/test.jpg'.split(' ')));
    $('img').attr('src').should.eql('/images/test.jpg');
    $('img').attr('class').should.eql('left top');

    hexo.config.url = 'http://yoursite.com/root';
    hexo.config.root = '/root/';
    $ = cheerio.load(img('left top /images/test.jpg'.split(' ')));
    $('img').attr('src').should.eql('/root/images/test.jpg');
    $('img').attr('class').should.eql('left top');
  });

  it('class + src + width', () => {
    const $ = cheerio.load(img('left https://placekitten.com/200/300 200'.split(' ')));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('width').should.eql('200');
  });

  it('class + src + width + height', () => {
    const $ = cheerio.load(img('left https://placekitten.com/200/300 200 300'.split(' ')));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('width').should.eql('200');
    $('img').attr('height').should.eql('300');
    should.not.exist($('img').attr('title'));
    should.not.exist($('img').attr('alt'));
  });

  it('class + src + title', () => {
    const $ = cheerio.load(img(['left', 'https://placekitten.com/200/300', 'Place Kitten']));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('title').should.eql('Place Kitten');
  });

  it('class + src + width + title', () => {
    const $ = cheerio.load(img(['left', 'https://placekitten.com/200/300', 200, 'Place Kitten']));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('width').should.eql('200');
    $('img').attr('title').should.eql('Place Kitten');
  });

  it('class + src + width + height + title', () => {
    const $ = cheerio.load(img(['left', 'https://placekitten.com/200/300', 200, 300, 'Place Kitten']));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('width').should.eql('200');
    $('img').attr('height').should.eql('300');
    $('img').attr('title').should.eql('Place Kitten');
    should.not.exist($('img').attr('alt'));
  });

  it('class + src + width + height + title + alt', () => {
    const $ = cheerio.load(img(['left', 'https://placekitten.com/200/300', 200, 300, 'Place Kitten', 'A cute kitten']));

    $('img').attr('src').should.eql('https://placekitten.com/200/300');
    $('img').attr('class').should.eql('left');
    $('img').attr('width').should.eql('200');
    $('img').attr('height').should.eql('300');
    $('img').attr('title').should.eql('Place Kitten');
    $('img').attr('alt').should.eql('A cute kitten');
  });

  it('title and alt should escaped', () => {
    img(['https://placekitten.com/200/300', 'a\'b"c', 'd\'e"f'])
      .should.eql('<img src="https://placekitten.com/200/300" title="a&#39;b&quot;c" alt="d&#39;e&quot;f">');
  });

  it('title and alt should not double escaped', () => {
    img(['https://placekitten.com/200/300', 'a&#39;b&quot;c', 'd&#39;e&quot;f'])
      .should.eql('<img src="https://placekitten.com/200/300" title="a&#39;b&quot;c" alt="d&#39;e&quot;f">');
  });
});
