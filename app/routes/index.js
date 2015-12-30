import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session'

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
        return [
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' },
          { 'user': 'John Doe', 'disease': 'cancer' }
        ];
      default:
        return null;
    }
  }

});
