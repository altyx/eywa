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
	templateUrl: '../views/user/login.ejs'
})

export class LoginComponent {

	constructor (private _userService: UserService) {}

	model = new Login( '', '','','','','');
	user:Login[];
	errorMessage: string;

	login(email: string, password: string) {
		this._userService.login(this.model.email, btoa(this.model.password))
						 .subscribe(
						 	users => this.user.push(users),
						 	error => this.handleError);
	}

	handleError() {
		console.log("error serveur");
	}
}