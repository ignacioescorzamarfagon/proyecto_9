const {
  insertManyStarWarsLocations,
  getScrapper
} = require('../controllers/starWars');

const starWarsLocationsRouter = require('express').Router();

starWarsLocationsRouter.post('/insertBBDD', insertManyStarWarsLocations);
starWarsLocationsRouter.get('/scrapper', getScrapper);

module.exports = starWarsLocationsRouter;
