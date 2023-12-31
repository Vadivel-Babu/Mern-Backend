const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  label: {
    type: String,
    require:true
  },
  url: {
    type: String,
    require:true
  }  
},
  {
    timestamps:true
  }
);

module.exports = mongoose.model('Gallery', GallerySchema);