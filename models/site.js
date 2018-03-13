var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: {
        type: String,
        required: true
    },
  url: {
        type: String,
        required: true
    },
  userId: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Site', SiteSchema);
