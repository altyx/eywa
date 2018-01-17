//Model UserEvent
//Liste les utilisateurs inscrits à l'event

module.exports = {
	attributes : {
		_id: {
			type: 'integer'
		},
		user_id: {
			type: 'integer',
			required: true
		},
		event_id: {
			type: 'integer',
			required: true
		}
	}
};