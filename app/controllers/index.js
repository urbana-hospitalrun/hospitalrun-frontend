import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session';
export default Ember.Controller.extend(UserSession, {

  mockRequests: [
  	{
  		name: 'Fill up water tank',
      quantity: 40,
      consumption_rate: 50,
      date: moment().format('lll'),
      location: "First floor",
      isUrgent: true
  	},
  	{
  		name: 'Buy more medicine',
      quantity: 10,
      consumption_rate: 3,
      date: moment().format('lll'),
      location: "Warehouse",
      isUrgent: false
  	},
    {
      name: 'Foo bar biz',
      quantity: 100,
      consumption_rate: 10,
      date: moment().format('lll'),
      location: "Top floor",
      isUrgent: false
    }
  ],

  mockInventory: [
    {
      inventoryItem: {name: "Advil"},
      quantity: 10,
      inventoryType: "medication",
      distributionUnit: "pcs",
      expiry_date: moment().format('lll'),
    },
    {
      inventoryItem: {name: "Tylenol"},
      quantity: 0,
      inventoryType: "medication",
      distributionUnit: "pcs",
      expiry_date: moment().format('lll'),
    },
    {
      inventoryItem: {name: "Facemasks"},
      quantity: 100,
      inventoryType: "supply",
      distributionUnit: "pcs",
      expiry_date: moment().format('lll'),
    },
    {
      inventoryItem: {name: "Syringes"},
      quantity: 20,
      inventoryType: "supply",
      distributionUnit: "pcs",
      expiry_date: moment().format('lll'),
    },
    {
      inventoryItem: {name: "Pikachu"},
      quantity: 1,
      inventoryType: "pokemon",
      distributionUnit: "pkmn",
      expiry_date: moment().format('lll'),
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
