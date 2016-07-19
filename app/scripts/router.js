import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import LoginView from './views/login';
import SignupView from './views/signup';
import Feed from './views/feed';
import session from './models/username';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signupFunction',
    feed: 'feedFunction'
  },
  loginFunction: function () {
    let login = new LoginView();
    $('.container').empty().append(login.render().$el);
  },
  signupFunction: function () {
    let signup = new SignupView();
    $('.container').empty().append(signup.render().$el);
  },
  feedFunction: function () {
    console.log(session);
    let feed = new Feed();
    $('.container').empty().append(feed.render().$el);
  }
 });

 const router = new Router ();

 export default router;
