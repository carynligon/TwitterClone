import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import tweets from '../collections/tweets';
import settings from '../settings';
import SinglePost from './singlePost';

const Profile = Backbone.View.extend({
  initialize: function() {
    let userProfile = location.hash.slice(9);
    tweets.on('add', () => {
      console.log('hi');
      this.render();
    });
    tweets.fetch({url:`https://baas.kinvey.com/appdata/${settings.appKey}/tweets/?query={"author":"${userProfile}"}`});
  },
  tagName: 'div',
  className: 'profile-container',
  template: function () {
    return `
    <div class="feed-list-wrapper">
      <ul class="feed-list">
      </ul>
    </div>
    `;
  },
  render: function () {
    this.$el.html(this.template());
    // let profileFeed = _.where(tweets, {author: location.hash.slice(9)});
    // console.log(tweets);
    // console.log(profileFeed);
    tweets.forEach((tweet) => {
      let singlePost = new SinglePost({
        model: tweet
      });
      singlePost.render();
      $('.feed-list').prepend(singlePost.$el);
    });
    return this;
  }
});

export default Profile;
