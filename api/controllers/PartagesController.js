/**
 * PartagesController
 *
 * @description :: Server-side logic for managing partages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPartages(req,res) {
		Partages.find({}).exec(function (err, p){
			if (err) {
				return res.negotiate(err);
			}
            console.log(p);
			res.json(p);
		});

	}
};
