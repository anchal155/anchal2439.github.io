import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  // private config = 'http://local.frejun.com:8080';

  private config = 'https://now.frejun.com';
  nextUrl: string = '/meetings';
  currentUrl: string = '/login';
  queryParams: string = '';
  private REGISTER_URL = this.config + '/api/v1/auth/register/native.json';
  private LOGIN_URL = this.config + '/api/v1/auth/login/native.json';
  private SIGNOUT_URL = this.config + '/api/v1/auth/logout';
  private WHO_AM_I_API_URL = this.config + '/api/v1/auth/who_am_i.json';
  private sub: any;
  version = "Web";
  isLoggedIn: boolean = false;
  csrftoken: string | string[];
  user: any = "";
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) {

  }
  login(email: string, password: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    const body = JSON.stringify({
      email,
      password
    });
    return this.http.post(this.LOGIN_URL, body, { headers }).map((response: Response) => {
      this.user = response;
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
      }
      return response;

    });

  }

  // sigup(email: string,first_name: string,last_name: string, password: string) {
  //   const body = JSON.stringify({first_name, last_name, email,
  //     password});
  //     let headers = new HttpHeaders({ 'Content-Type': 'application/json' ,'Accept': 'application/json'});
  //     console.log("HERE");
  //   return  this.http.post(this.REGISTER_URL, body, {headers}).map((response: Response) => {
  //     console.log("HERE", response.json());
  //     return response;

  //   });
  // }
  sigup(email: string, first_name: string, last_name: string, password: string) {
    const body = JSON.stringify({
      first_name, last_name, email,
      password
    });
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    return this.http.post(this.REGISTER_URL, body, { headers })
      .map(resp => Response)
      .catch(err => this.handleSignupError(err));

  }
  private handleSignupError(err: any) {
    let status = err.status;
    let errMsg = 'Something went wrong, You were unable to signup!';
    if (status === 404) {
      errMsg = 'You don\'t have access to signup on the platform! Sorry contact us!';
    } else if (status === 400) {
      errMsg = 'profile with this email already exists.';
      console.log(errMsg);
    } else {
      let errors = JSON.parse(err._body);
      console.log(errors);
      // errMsg = _.first(_.values(errors));
    }
    return Observable.throw(errMsg);
  }
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
  }
}




