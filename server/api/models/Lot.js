/**
* Lot.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    auctioneer: {
      model: 'auction'
    },

    name : { type: 'string' },

    description : { type: 'string' },

    basePrice : { type: 'float' },

    number : { type: 'float' }
  }
};

