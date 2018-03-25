const rp = require('request-promise');
const cheerio = require('cheerio');




const options = (uri) => {
  return {
  uri,
  transform: function (body) {
    return cheerio.load(body);
    }
  };
};



const scraper = async (uri) => {
  let setup = await options(uri)
  rp(setup)
  .then(($) => {
    return $('*').html();
  })
  .catch((err) => {
    return err;
  });
}

module.exports = scraper
