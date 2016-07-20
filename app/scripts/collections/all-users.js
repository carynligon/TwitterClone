import Backbone from 'backbone';
import UserMod from '../models/user';
import settings from '../settings';

const UserCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
  model: UserMod
});

let userCollection = new UserCollection();

export default userCollection;
