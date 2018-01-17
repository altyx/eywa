/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes: {

 		_id:{
 			type: 'integer'
 		},
 		lastName: {
 			type: 'string',
 			required: true
 		},
 		firstName: {
 			type: 'string',
 			required: true
 		},
 		email: {
 			type: 'string',
 			unique: true,
 			email: true
 		},
 		password: {
 			type: 'string',
 			required: true
 		},
 		phone: {
 			type: 'string',
 			required: true
 		},
 		mobile: {
 			type: 'string',
 			required: true
 		},
 		categories: {
 			collection: 'Category',
 			via: 'category'
 		},
 		_update: {
 			type: 'date'
 		}
 	}
 };
