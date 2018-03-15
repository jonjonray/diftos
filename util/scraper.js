const rp = require('request-promise');
const cheerio = require('cheerio');


const options = function (uri) {
  return {
          uri,
          transform: function (body) {
            return cheerio.load(body);
            }
          };
};


const scraper = function (uri){
  rp(options(uri))
  .then(($) => {
    return $;
  })
  .catch((err) => {
    return err;
  });
};



  module.exports = scraper;
