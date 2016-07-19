import Backbone from 'backbone';
import settings from '../settings';
import SingleTweet from '../models/tweet';

const Tweets = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/tweets`,
  model: SingleTweet
});

let tweets = new Tweets();

export default tweets;
