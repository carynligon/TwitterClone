import Backbone from 'backbone';
import settings from '../settings';

const SingleTweet = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/tweets`,
  defaults: {
    timestamp: new Date()
  },
  delete: function () {
    this.destroy();
  }
});

export default SingleTweet;
