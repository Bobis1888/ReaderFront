import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DataService {

    private readonly url: string;

    constructor(private http: HttpClient) {
    	this.url = environment.baseUrl + '/api';
    }

    getItems(nameSource: string): Observable<Response>  {
        return this.http.get<Response>(this.url + '/items/' + nameSource);
    }

    getItem(postId: number): Observable<Response> {
        return this.http.get<Response>(this.url + '/item/' + postId);
    }
}
