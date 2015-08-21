import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  basePrice: DS.attr('number'),
  number: DS.attr('number')
});
