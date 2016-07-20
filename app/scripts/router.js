import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import LoginView from './views/login';
import SignupView from './views/signup';
import SessionSidebar from './views/profile-sidebar';
import Feed from './views/feed';
import session from './models/username';
import Nav from './views/nav';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signupFunction',
    sessionSidebar: 'sessionSidebarFunction',
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
    let nav = new Nav();
    let feed = new Feed();
    let sidebar = new SessionSidebar();
    $('.container').empty().append(nav.render().$el).append(sidebar.render().$el).append(feed.render().$el);
  }
 });

 const router = new Router ();

 export default router;
