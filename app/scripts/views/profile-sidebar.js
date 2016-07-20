import Backbone from 'backbone';
import $ from 'jquery';
import userCollection from '../collections/all-users';
import settings from '../settings';
import _ from 'underscore';


const ProfileSidebar = Backbone.View.extend({
  initialize: function () {
    this.on('add', () => {
      this.render();
    });
    userCollection.fetch({url:`https://baas.kinvey.com/user/${settings.appKey}/?query={"username":"${location.hash.slice(9)}"}`});
  },
  tagName: 'aside',
  template: () => {
    return `
    <div class="user-info">
      <a href="#profile/${userCollection.get('username')}"><i class="fa fa-user user-icon" aria-hidden="true"></i></a>
      <a href="#profile/${userCollection.get('username')}" class="fullname">${userCollection.get('fullname')}</a>
      <a href="#profile/${userCollection.get('username')}">@${userCollection.get('username')}</a>
    </div>
    `;
  },
  render: function () {
    console.log(userCollection);
    this.$el.html(this.template());
    return this;
  }
});

export default ProfileSidebar;
