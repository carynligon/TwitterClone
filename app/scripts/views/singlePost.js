import Backbone from 'backbone';
import $ from 'jquery';
import tweets from '../collections/tweets';
import moment from 'moment';
import Feed from './feed';
import settings from '../settings';

const SinglePost = Backbone.View.extend({
    tagName: 'li',
    className: 'single-tweet',
    events: {
      'click .delete': 'deleteFunction',
    },
    deleteFunction: function () {
      this.model.destroy();
      console.log(tweets);
    },
    template: function() {
        return `
    <ul class="tweet-details">
      <li class="profile-pic"><i class="fa fa-user user-icon" aria-hidden="true"></i></li>
      <li class="username"><a href="#profile/${this.model.get('author')}">${this.model.get('fullname')}</a></li>
      <li class="handle"><a href="#profile/${this.model.get('author')}">@${this.model.get('author')}</a></li>
      <li class="time">${moment(new Date(this.model.get('timestamp'))).fromNow()}</li>
      <li class="body" data-id=${this.model.get('_id')}>${this.model.get('body')}</li>
      <ul class="user-interactions">
        <li class="like"><i class="fa fa-heart heart-icon" aria-hidden="true"></i></li>
        <li class="edit"><a href="#edit/${this.model.get('_id')}"><i class="fa fa-pencil edit-icon" aria-hidden="true"></i></a></li>
        <li class="delete"><i class="fa fa-trash delete-icon" aria-hidden="true" data-id="${this.model.get('_id')}"></i></i></li>
    </ul>
    `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default SinglePost;
