const mongoose = require('mongoose');

const starWarsLocationSchema = new mongoose.Schema(
  {
    locationTitle: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'starWarsLocations'
  }
);

const StarWarsLocation = mongoose.model(
  'starWarsLocations',
  starWarsLocationSchema,
  'starWarsLocations'
);
module.exports = StarWarsLocation;
