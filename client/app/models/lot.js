import DS from 'ember-data';

export default DS.Model.extend({
  auctioneer: DS.belongsTo('auction', {async: true}),
  name: DS.attr('string'),
  description: DS.attr('string'),
  basePrice: DS.attr('number'),
  number: DS.attr('number')
});
