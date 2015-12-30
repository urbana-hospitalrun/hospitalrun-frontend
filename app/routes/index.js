import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session'

var today = new Date()

var taskData =
[
    {'fulfilled': false, 'type': 'surgery', 'taskname': 'open heart surgery on <patientname>', 'date': new Date(today.getDate() - 1)},
    {'fulfilled': false, 'type': 'report', 'taskname': 'report heart surgery on <patientname>', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'type': 'report', 'taskname': 'report heart surgery on <patientname>', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'type': 'surgery', 'taskname': 'open heart surgery on <patientname>', 'date': new Date(today.getDate() - 3)},
    {'fulfilled': false, 'type': 'surgery', 'taskname': 'open heart surgery on <patientname>', 'date': new Date(today.getDate() - 1)}
]



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
        return taskData;
      default:
        return null;
    }
  }

});
