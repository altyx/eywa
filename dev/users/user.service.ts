import {Injectable}     from 'angular2/core';
import {Http, Response,RequestOptions, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import "rxjs/add/operator/map"
import {Login} from './login'

@Injectable()

export class UserService {
	constructor (private http: Http){	}

	private _userUrl = '/apilogin';
	private _loginurl = '/loginapi';

	getUser () {
		return this.http.get(this._userUrl)
		.map(res => res.json())
	}

	login(email: string, password: string) {
		let body = JSON.stringify({ email , password });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this._loginurl, body, options)
		.map(res => res.json().data);
		console.log("data");
	}

	inscription(firstName: string, lastName: string, email: string, password: string, phone: string, mobile: string) {
		let body = JSON.stringify({lastName, firstName, email , password, phone, mobile });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this._userUrl, body, options)
		.map(res => res.json().data)
	}

	private Error(error : Response) {
		console.log(error);
		return Observable.throw(error.json().error ||'error');
	}
}
