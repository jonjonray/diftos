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



const scraper = async () {

  rp(options)
  .then(($) => {
    console.log($('*').html());
  })
  .catch((err) => {
    console.log(err);
  });
}
