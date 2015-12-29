import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session';
export default Ember.Controller.extend(UserSession, {

  mockRequests: [
  	{
  		"name": 'request2'
  	},
  	{
  		"name": 'request1'
  	}
  ],

  mockInventory: [
    {
      inventoryItem: {name: "Advil"},
      quantity: 10,
      inventoryType: "medication",
      distributionUnit: "pcs",
    },
    {
      inventoryItem: {name: "Tylenol"},
      quantity: 0,
      inventoryType: "medication",
      distributionUnit: "pcs",
    },
    {
      inventoryItem: {name: "Facemasks"},
      quantity: 100,
      inventoryType: "supply",
      distributionUnit: "pcs",
    },
    {
      inventoryItem: {name: "Syringes"},
      quantity: 20,
      inventoryType: "supply",
      distributionUnit: "pcs",
    },
    {
      inventoryItem: {name: "Pikachu"},
      quantity: 1,
      inventoryType: "pokemon",
      distributionUnit: "pkmn",
    },
  ],

  indexLinks: [
    'Appointments',
    'Labs',
    'Imaging',
    'Inventory',
    'Medication',
    'Patients',
    'Users'
  ],

  setupPermissions: function() {
    var permissions = this.get('defaultCapabilities');
    for (var capability in permissions) {
      if (this.currentUserCan(capability)) {
        this.set('userCan_' + capability, true);
      }
    }
  }.on('init'),

  activeLinks: function() {
    var activeLinks = [],
      indexLinks = this.get('indexLinks');
    indexLinks.forEach(function(link) {
      var action = link.toLowerCase();
      if (this.currentUserCan(action)) {
        activeLinks.push({
          action: action,
          text: link
        });
      }
    }.bind(this));
    return activeLinks;
  }.property('indexLinks')

});
