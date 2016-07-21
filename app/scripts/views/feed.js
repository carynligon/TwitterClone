import Backbone from 'backbone';
import $ from 'jquery';
import tweets from '../collections/tweets';
import tweet from '../models/tweet';
import SinglePost from './singlePost';
import session from '../models/username';

const Feed = Backbone.View.extend({
    initialize: function() {
        tweets.on('add', () => {
            this.render();
        });
        tweets.on('remove', () => {
            this.render();
        });
        tweets.fetch();
    },
    tagName: 'div',
    className: 'feed-container',
    events: {
        'keydown #post-from-feed': 'keyAction',
    },
    keyAction: function(evt) {
        if (evt.which === 13) {
            tweets.create({
                fullname: session.get('fullname'),
                author: session.get('username'),
                body: $('#post-from-feed').val()
            });
            console.log(session);
        }
    },
    template: function() {
        return `
    <div class="feed-list-wrapper">
    <form class="new-post-form">
      <i class="fa fa-user user-icon" aria-hidden="true"></i>
      <input type="text" name="post-from-feed" id="post-from-feed" placeholder="What's happening?" />
    </form>
    <ul class="feed-list">
    </ul>
    </div>
    `;
    },
    render: function() {
        this.$el.html(this.template());
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

export default Feed;
