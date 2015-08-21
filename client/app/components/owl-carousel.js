import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['owl-carousel','owl-theme'],
  didInsertElement: function(){
    var self = this;
    var options = {};
    options.autoplay = self.get('autoplay');
    options.pagination = self.get('pagination');

    self.$().owlCarousel(options);
  }
});
