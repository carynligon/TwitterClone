import Backbone from 'backbone';
import $ from 'jquery';
import tweets from '../collections/tweets';

const EditTweet = Backbone.View.extend({
  initialize: function (id) {
    this.model = tweets.get(id);
  },
  tagName: 'form',
  className: 'edit-tweet',
  events: {
    'keydown input': 'submitFunction'
  },
  submitFunction: (evt) => {
    if (evt.which === 13) {
      this.model.save({body:$('input').val()}, {
        success: function (response) {
          console.log(response);
        }
      });
    }
  },
  template: function () {
    return `
    <input type="text" class="edit-input" />
    `;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

export default EditTweet;
