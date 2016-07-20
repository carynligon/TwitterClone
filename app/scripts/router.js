import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import LoginView from './views/login';
import SignupView from './views/signup';
import SessionSidebar from './views/session-sidebar';
import Feed from './views/feed';
import Profile from './views/profile';
import ProfileSidebar from './views/profile-sidebar';
import session from './models/username';
import tweets from './collections/tweets';
import Nav from './views/nav';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signupFunction',
    sessionSidebar: 'sessionSidebarFunction',
    feed: 'feedFunction',
    'profile/:username': 'profileFunction'
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
    tweets.off();
    let nav = new Nav();
    let feed = new Feed();
    let sidebar = new SessionSidebar();
    $('.container').empty().append(nav.render().$el).append(`<main></main>`);
    $('main').append(sidebar.render().$el).append(feed.render().$el);
  },
  profileFunction: function (username) {
    tweets.off();
    let nav = new Nav();
    let profile = new Profile();
    let profileSidebar = new ProfileSidebar(username);
    $('.container').empty().append(nav.render().$el).append(`<main></main>`);
    $('main').append(profileSidebar.$el).append(profile.render().$el);
  }
 });

 const router = new Router ();

 export default router;
