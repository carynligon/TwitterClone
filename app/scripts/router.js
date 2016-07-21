import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './models/username';


import LoginView from './views/login';
import SignupView from './views/signup';
import SessionSidebar from './views/session-sidebar';
import Feed from './views/feed';
import EditTweet from './views/edit';
import Profile from './views/profile';
import ProfileSidebar from './views/profile-sidebar';
import Nav from './views/nav';


import tweets from './collections/tweets';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signupFunction',
    sessionSidebar: 'sessionSidebarFunction',
    feed: 'feedFunction',
    'edit/:id': 'editFunction',
    'profile/:username': 'profileFunction'
  },
  loginFunction: function () {
    let login = new LoginView();
    $('.container').empty().append(`<div class="login-header"><i class="fa fa-twitter" aria-hidden="true"></i></div>`).append(login.render().$el);
  },
  signupFunction: function () {
    let signup = new SignupView();
    $('.container').empty().append(`<div class="login-header"><i class="fa fa-twitter" aria-hidden="true"></i></div>`).append(signup.render().$el);
  },
  feedFunction: function () {
    tweets.off();
    let nav = new Nav();
    let feed = new Feed();
    let sidebar = new SessionSidebar();
    $('.container').empty().append(nav.render().$el).append(`<main></main>`);
    $('main').append(sidebar.render().$el).append(feed.render().$el);
  },
  editFunction: function (id) {
    tweets.off();
    let nav = new Nav();
    let editTweet = new EditTweet(id);
    $('.container').empty().append(nav.render().$el).append(editTweet.render().$el);
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
