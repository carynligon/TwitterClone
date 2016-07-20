import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './models/username';
import router from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

Backbone.history.start();

if (!localStorage.getItem('authtoken')) {
  router.navigate('login', {trigger: true});
} else {
  session.retrieve();
}
