/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getEvents(req,res) {
		Events.find({}).exec(function (err, title){
		  if (err) {
		    return res.negotiate(err);
		  }
		  res.json(title);
		});

	},

	inscription: function(req,res) {
		UserEvent.findOne({event_id:req.param('event_id')}).exec(function(err,userEvent){
			if(err) {
				console.log("error find userEvent");
			}
			if(userEvent) {
				res.send("Vous êtes deja inscrit");
			}
			else {
				//Find l'event en question pour avoir le nombre de place
				Events.find({id:req.param('event_id')}).exec(function(err,event) {
					if(err) {
						console.log("error find Event");
					}
					if(event[0].nbPlace > 0) {
						//update le nombre de place s'il reste de place
						Events.update({id:req.param('event_id')},{nbPlace: event[0].nbPlace -1}).exec(function afterwards(err, updated){
							if (err) {
								// handle error here- e.g. `res.serverError(err);`
								console.log("error -1");
								return;
							}
						console.log('ok -1');
						});
						UserEvent.create({user_id:req.param('user_id'), event_id: req.param('event_id')}).exec(function createCB(err, created){
							if(err) {
								console.log("error create");
							}
						});
					}
				});
				res.send("Vous êtes inscrits à l'event")
			}
		})
	}
};
