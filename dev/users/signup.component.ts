import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';

import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgForm}    from 'angular2/common';
import { Login }    from './login';
import {UserService} from './user.service'
@Component({
	selector: 'login',
	providers: [HTTP_PROVIDERS, UserService]

})
@View({
	directives: [RouterLink],
	templateUrl: '../views/user/signup.ejs'
})

export class SignupComponent {

	constructor (private _userService: UserService) {}

	model = new Login( '', '', '','','','');
	user:Login[];
	errorMessage: string;

/*

	onSubmit() { 
		//console.log(btoa(this.model.password));
		this._userService.getUser()
			.subscribe(
				data => this.user,
				error => alert(error),
				() => console.log("fini le onSubmit")
 			);
	}
*/
	inscription(lastName: string, firstName: string, email: string, password: string, phone: string, mobile: string) {
		this._userService.inscription(this.model.lastName, this.model.firstName,this.model.email, btoa(this.model.password), this.model.phone,this.model.mobile)
						 .subscribe(
						 	users => this.user.push(users),
						 	error => this.handleError);
	}

	handleError() {
		console.log("error serveur");
	}
}