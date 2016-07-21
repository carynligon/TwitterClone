import $ from 'jquery';
import Backbone from 'backbone';
import session from '../models/username';
import router from '../router';
import settings from '../settings';
import userCollection from '../collections/all-users';
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
    userCollection.create({username:username, password: password, fullname: fullname}, {
      success: function () {
        console.log('success, you created a new user');
        router.navigate('login', {trigger:true});
      }
    });
  },
  template: function () {
    return `
    <h2>Sign up</h2>
    <input id="fullname" type="text" name="fullname" placeholder="Full name"/>
    <input id="username" type="text" name="username" placeholder="username"/>
    <input id="password" type="password" name="password" placeholder="password"/>
    <input type="submit" name="submit" value="submit">
    <a href="#login">Already a member? Sign in!</a>
    `;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },

});

export default SignupView;
