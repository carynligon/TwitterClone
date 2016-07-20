import $ from 'jquery';
import Backbone from 'backbone';
import session from '../models/username';
import router from '../router';

const LoginView = Backbone.View.extend({
    tagName: 'form',
    className: 'login-form',
    events: {
        'submit': 'submitFunction'
    },
    submitFunction: function(evt) {
        let username = $('#username').val();
        let password = $('#password').val();
        evt.preventDefault();
        session.save({
            username: username,
            password: password
        }, {
            success: function(model, response) {
                window.localStorage.setItem('authtoken', response._kmd.authtoken);
                model.unset('password');
                router.navigate('feed', {
                    trigger: true
                });
            },
            error: function() {
                console.log('error, not logged in');
            }
        });
    },
    template: function() {
        return `
    <h2>Login</h2>
    <input id="username" type="text" name="username" placeholder="username"/>
    <input id="password" type="password" name="password" placeholder="password"/>
    <input type="submit" name="submit" value="submit">
    `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },

});

export default LoginView;
