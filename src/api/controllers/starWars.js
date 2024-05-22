const starWarsLocation = require('../models/starWars');
const starWarsLocations = require('../../../starWarsLocations.json');
const { scrapper } = require('../../utils/scrapper');

const insertManyStarWarsLocations = async (req, res, next) => {
  try {
    await starWarsLocation.insertMany(starWarsLocations);
    return res
      .status(201)
      .json('Todas las localizaciones de Star Wars subidas a la BBDD');
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getScrapper = async (req, res, next) => {
  try {
    await scrapper('https://www.starwars.com/databank');
    return res.status(201).json('Scrapeo terminado');
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  insertManyStarWarsLocations,
  getScrapper
};
