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
      'click .edit': 'editFunction'
    },
    editFunction: function (evt) {
      let body = $(evt.target).parent('user-interactions').siblings('.body');
      console.log(body);
      body.append(`<input type="text" class="editing-tweet" value="${body.val()}"`);
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
      <li class="body">${this.model.get('body')}</li>
      <ul class="user-interactions">
        <li class="like"><i class="fa fa-heart heart-icon" aria-hidden="true" data-id="${this.model.get('_id')}"></i></li>
        <li class="edit"><i class="fa fa-pencil edit-icon" aria-hidden="true" data-id="${this.model.get('_id')}"></i></li>
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
