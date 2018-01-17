import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';

@Component({
   selector: 'account',
   
})
@View({
	directives: [RouterLink],
	templateUrl: '../views/user/account.ejs'
})

export class AccountComponent {

}