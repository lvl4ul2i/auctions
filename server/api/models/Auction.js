/**
* Auction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    //relationship
    lots: {
      collection: 'lot',
      via: 'auctioneer'
    },

    place : { type: 'string' },

    name : { type: 'string' },

    date : { type: 'date' },

    concept : { type: 'string' },

    description : { type: 'string' }
  }
};

