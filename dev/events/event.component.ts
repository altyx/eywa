import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { Event }    from './event';
import {EventService} from './event.service';
import {Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {UserEvent} from './UserEvent';

@Component({
   selector: 'event',
   providers: [HTTP_PROVIDERS, EventService]
})
@View({
	directives: [RouterLink],
	templateUrl: '../views/event/event.ejs'
})

export class EventComponent {
	constructor(private _EventService: EventService, private router: Router) {}

  model = new Event( null,'', '','','','','','','');
  userEvent = new UserEvent('','','');
  user: UserEvent[];
	Events : Event[];
  id: string;

//571274bd7182e47416d37055
  inscription(id: string) {
    this.userEvent.event_id = id;
    this.userEvent.user_id = '571274bd7182e47416d37055';
    this._EventService.inscription(this.userEvent)
             .subscribe(
              data => this.user.push(data),
              error => this.errorMessage
            );
  }

	errorMessage = "une erreur";

  ngOnInit() { this.getEvent(); }

	getEvent() {
	  this._EventService.getEvent()
	                   .subscribe(
	                     Event => this.Events = Event,
	                     error =>  this.errorMessage = <any>error);

	}

  handleError() {
    console.log("error");
  }

}
