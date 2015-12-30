import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session'

var today = new Date()

var modelData = {
  'taskData': [
    {'fulfilled': false, 'patientname': 'Sherman', 'location':'Rm 129', 'type': 'surgery', 'taskname': 'open heart surgery ', 'date': new Date(today.getDate() - 1)},
    {'fulfilled': false, 'patientname': 'Josh', 'location':'Rm 129', 'type': 'report', 'taskname': 'report heart surgery ', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'patientname': 'Trevor', 'location':'Rm 129', 'type': 'report', 'taskname': 'report heart surgery ', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'patientname': 'Trevor', 'location':'Rm 129', 'type': 'surgery', 'taskname': 'open heart surgery ', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'patientname': 'Sherman', 'location':'Rm 129', 'type': 'surgery', 'taskname': 'open heart surgery ', 'date': new Date(today.getDate() - 1)}
  ],
  'patientData': [
    {
      'name': 'Sherman',
      'age': '21',
      'gender': 'M',
      'location': 'Room 123',
      'id': 'P0003'
    },
    {
      'name': 'Rebecca',
      'age': '40',
      'gender': 'F',
      'location': 'Room 123',
      'id': 'P0003'
    }
  ]
}



export default Ember.Route.extend(AuthenticatedRouteMixin, UserSession, {
  afterModel: function() {
    this.controllerFor('navigation').set('allowSearch', false);
  },
  model: function() {
    var userSession = this._getUserSessionVars();
    var userRole = userSession.role;
    console.log('My userRole is:', userRole);

    switch (userRole) {
      case 'System Administrator': // aka doctor
        return modelData;
      default:
        return null;
    }
  }

});
