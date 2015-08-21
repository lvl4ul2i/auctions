import DS from 'ember-data';

export default DS.Model.extend({
  lots: DS.hasMany('lot', {async: true}),
  place: DS.attr('string'),
  name: DS.attr('string'),
  date: DS.attr('date'),
  concept: DS.attr('string'),
  description: DS.attr('string')
});
