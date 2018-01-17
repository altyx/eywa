/**
 * Partages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    _id: {
      type: 'integer'
    },
    user_id: {
      collection: 'User',
      via: '_id',
    },
    content: {
      type: 'string',
      required: true
    },
    dateCreation: {
      type: 'string',
      required: true
    },
    _delete: {
      type: 'date'
    }
  }
};
