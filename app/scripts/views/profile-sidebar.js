import Backbone from 'backbone';
import $ from 'jquery';
import userCollection from '../collections/all-users';
import settings from '../settings';
import _ from 'underscore';

// let model = '';

const ProfileSidebar = Backbone.View.extend({
  initialize: function (username) {
    userCollection.on('add', () => {
      console.log(userCollection);
      this.model = userCollection.models[0];
      console.log(this.model);
      this.render();
    });
    userCollection.fetch({url:`https://baas.kinvey.com/user/${settings.appKey}/?query={"username":"${username}"}`});
  },
  tagName: 'aside',
  template: function () {
    return `
    <div class="user-info">
      <a href="#profile/${this.model.get('username')}"><i class="fa fa-user user-icon" aria-hidden="true"></i></a>
      <div class="username-info">
        <a href="#profile/${this.model.get('username')}" class="username">${this.model.get('username')}</a>
        <a href="#profile/${this.model.get('username')}">@${this.model.get('username')}</a>
      </div>
    </div>
    `;
  },
  render: function () {
    console.log(this);
    console.log(this.model.get('username'));
    this.$el.html(this.template());
    return this;
  }
});

export default ProfileSidebar;
