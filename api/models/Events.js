/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	_id: {
  		type: 'integer'
  	},
  	title: {
  		type: 'string',
  		required: true
  	},
  	description: {
  		type: 'string',
  		required: true
  	},
  	nbPlace: {
  		type: 'string',
  		required: true
  	},
  	streetPlace: {
  		type: 'string',
  		required: true
  	},
  	zipCode: {
  		type: 'string',
  		required: true
  	},
  	city: {
  		type: 'string',
  		required: true
  	},
  	frequence: {
  		type: 'string',
  		required: true
  	},
  	date: {
  		type: 'date',
  		required: true
  	}

  }
};

