import $ from 'jquery';
import Backbone from 'backbone';
import session from '../models/username';
import router from '../router';
import settings from '../settings';
import UserMod from '../models/user';

const SignupView = Backbone.View.extend({
  tagName: 'form',
  className: 'signup-form',
  events: {
    'submit': 'submitFunction'
  },
  submitFunction: function (evt) {
    evt.preventDefault();
    let fullname = $('#fullname').val();
    let username =  $('#username').val();
    let password =  $('#password').val();
    let newUser = new UserMod();
    newUser.save({username:username, password: password, fullname: fullname}, {
      success: function (response) {
        console.log(response);
        router.navigate('feed', {trigger:true});
      },
      error: function () {
        console.log('error, user not created');
      }
    });
  },
  template: function () {
    return `
    <h2>Login</h2>
    <input id="fullname" type="text" name="fullname" placeholder="Full name"/>
    <input id="username" type="text" name="username" placeholder="username"/>
    <input id="password" type="password" name="password" placeholder="password"/>
    <input type="submit" name="submit" value="submit">
    `;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },

});

export default SignupView;
