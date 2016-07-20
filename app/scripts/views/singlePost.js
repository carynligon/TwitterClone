import Backbone from 'backbone';
import tweets from '../collections/tweets';

const SinglePost = Backbone.View.extend({
  tagName: 'li',
  className: 'single-tweet',
  template: function () {
    return `
    <ul class="tweet-details">
      <li class="username">${this.model.get('author')}</li>
      <li class="handle">@${this.model.get('author')}</li>
      <li class="time">${this.model.get('timestamp')}</li>
      <li class="body">${this.model.get('body')}</li>
    </ul>
    `;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

export default SinglePost;
