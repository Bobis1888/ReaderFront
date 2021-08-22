import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Response } from '../models/response';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable()
export class DataService {

    private url: string;

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
