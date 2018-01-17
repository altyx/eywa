import {Injectable}     from 'angular2/core';
import {Http, Response,RequestOptions, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import {Event} from './event';
import {UserEvent} from './UserEvent';

@Injectable()

export class EventService {
	constructor (private http: Http){	}

	private _eventURL = '/apiCreateEvent'
	private _userEventUrl = '/apiInscriptionEvent'
	
	create(model: Event) {
		let body = JSON.stringify(model);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this._eventURL, body, options)
		.map(res => res.json().data)
	}

	inscription(userEvent: UserEvent) {
		let body = JSON.stringify(userEvent);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this._userEventUrl, body, options)
		.map(res => res.json().data)
	}

	getEvent() {
		return this.http.get('/apiGetEvents')
						.map(res =>  res.json())
						.catch(this.handleError);
	}

	private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
  }
}
