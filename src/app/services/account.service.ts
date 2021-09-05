import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Response } from '../model/response';
import { User } from '../model/User';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({providedIn: 'root'})
export class AccountService {

    private readonly url: string;
    static currentUser = new User();

    constructor(private http: HttpClient) {
      this.url = environment.baseUrl + '/api/user'
    }

    public getCurrentUser() {
      return AccountService.currentUser;
    }

    login(user: User): Observable<Response> {
      return this._post(user,'login');
    }

    reg(user: User): Observable<Response> {
      return this._post(user,'registration');
    }

    info(): string {
      return "info"
    }

    check(): Observable<Response> {
      return this.http.get<Response>(this.url + '/check');
    }

    private _post(user: User,url: string): Observable<Response> {
      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Methods','OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
      return this.http.post<Response>(this.url + '/' + url, user,{headers:headers}).pipe(
        catchError(this.handleError)
      );
    }

    logout() {
      AccountService.currentUser = new User();
      this.http.get(this.url + '/logout');
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        `${error.error}`);
    }
}
