import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  afterModel: function() {
    this.controllerFor('navigation').set('allowSearch', false);
  },

  model: function(){
    return{
      data :[
        {
          name: "Advil",
          quantity: 10,
          inventoryType: "medication",
          distributionUnit: "pcs",
        },
        {
          name: "Tylenol",
          quantity: 0,
          inventoryType: "medication",
          distributionUnit: "pcs",
        },
        {
          name: "face masks",
          quantity: 100,
          inventoryType: "supply",
          distributionUnit: "pcs",
        },
        {
          name: "syringes",
          quantity: 20,
          inventoryType: "supply",
          distributionUnit: "pcs",
        },
        {
          name: "pikachu",
          quantity: 1,
          inventoryType: "pokemon",
          distributionUnit: "pkmn",
        },
      ]
    };
  }

});
