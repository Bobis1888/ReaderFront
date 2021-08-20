import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable, throwError } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

    private url: string;

    constructor(private http: HttpClient) {
    	this.url = environment.baseUrl + '/api';
    }

    getItems(nameSource: string): Promise<Item[]>  {
        let httpOptions = {
          headers: new HttpHeaders({'Email': 'test@test'})
        };
        return this.http.get(this.url + '/items/' + nameSource,httpOptions).toPromise().then((response: APIResponse) => response.items);
    }

    getItem(postId: number): Promise<Item> {
        return this.http.get(this.url + '/item/' + postId).toPromise().then((response: APIResponse) => response.items[0]);
    }
}
