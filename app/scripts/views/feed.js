import Backbone from 'backbone';
import $ from 'jquery';
import tweets from '../collections/tweets';
import SinglePost from './singlePost';
import session from '../models/username';

const Feed = Backbone.View.extend({
  tagName: 'div',
  className: 'feed-container',
  events: {
    'keydown #post-from-feed': 'keyAction'
  },
  keyAction: function (evt) {
    if (evt.which === 13) {
      tweets.create({
        author: session.username,
        body: $('#post-from-feed').val()
      });
      console.log(session);
    }
  },
  template: function () {
    return `
    <ul class="feed-list">
    <input type="text" name="post-from-feed" id="post-from-feed" placeholder="What's happening?" />
    </ul>
    `;
  },
  render: function () {
    this.$el.html(this.template());
    tweets.forEach((tweet) => {
      let singlePost = new SinglePost({
        model: tweet
      });
      singlePost.render();
      this.$('ul').append(singlePost.$el);
    });
    return this;
  }
});

export default Feed;
