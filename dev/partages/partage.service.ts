import {Injectable}     from 'angular2/core';
import {Http, Response,RequestOptions, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import {Partage} from './partage';

@Injectable()

export class PartageService {
	constructor (private http: Http){	}

	private _getPartages = '/apiGetPartages';
	private _createPartages = '/apiCreatePartages';

	create(model: Partage) {
		let body = JSON.stringify(model);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this._createPartages, body, options)
		.map(res => res.json().data)
	}

	getPartages() {
		return this.http.get('/apiGetPartages')
						.map(res =>  res.json())

						.catch(this.handleError);

	}

	private handleError (error: Response) {
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
  }
}
