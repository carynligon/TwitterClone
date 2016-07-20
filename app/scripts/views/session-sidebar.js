import Backbone from 'backbone';
import $ from 'jquery';
import session from '../models/username';

const SessionSidebar = Backbone.View.extend({
    initialize: function () {
      session.on('change', () => {
        this.render();
      });
    },
    tagName: 'aside',
    template: function() {
        return `
    <div class="user-info">
      <a href="#profile/${session.get('username')}"><i class="fa fa-user user-icon" aria-hidden="true"></i></a>
      <a href="#profile/${session.get('username')}" class="fullname">${session.get('fullname')}</a>
      <a href="#profile/${session.get('username')}">@${session.get('username')}</a>
    </div>
    `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default SessionSidebar;
