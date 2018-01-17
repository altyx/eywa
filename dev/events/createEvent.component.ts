import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgForm}    from 'angular2/common';
import { Event }    from './event';
import {EventService} from './event.service'
@Component({
	selector: 'event',
	providers: [HTTP_PROVIDERS, EventService]

})
@View({
	directives: [RouterLink],
	templateUrl: '../views/event/new.ejs'
})

export class CreateEventComponent {

	constructor (private _EventService: EventService, private router: Router) {}

	model = new Event( null,'', '','','','','','','');
	event:Event[];

	create(model: Event) {
		this._EventService.create(this.model)
						 .subscribe(
						 	events => this.event.push(events),
						 	error => this.handleError);
						 this.router.navigate(['Event']);
	}

	handleError() {
		console.log("error");
	}

}
