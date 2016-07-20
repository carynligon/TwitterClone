import Backbone from 'backbone';
import $ from 'jquery';
import settings from '../settings';
import session from '../models/username';
import router from '../router';

const Nav = Backbone.View.extend({
    tagName: 'nav',
    template: function() {
        return `
    <ul class="navigation">
      <li class="home"><a href="#feed"><i class="fa fa-home home-icon" aria-hidden="true"></i><span>Home</span></a></li>
      <li class="logo"><i class="fa fa-twitter" aria-hidden="true"></i></li>
      <li class="new-tweet">Tweet</li>
      <li class="logout"><button id="logout"><i class="fa fa-user user-icon" aria-hidden="true"></i></button></li>
    </ul>
    `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click #logout': 'logoutFunction'
    },
    logoutFunction: function() {
        session.save(null, `https://baas.kinvey.com/user/${settings.appKey}/_logout`);
        localStorage.clear();
        router.navigate('login', {trigger:true});
    }
});

export default Nav;
