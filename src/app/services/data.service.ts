import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable, throwError } from 'rxjs';
import { APIResponse } from '../models/APIResponse';

@Injectable()
export class DataService {

    private url = 'http://localhost:8080/api/';

    constructor(private http: HttpClient) {
    }

    getItems(nameSource: string): Promise<Item[]>  {
        return this.http.get(this.url + 'items/' + nameSource).toPromise().then((response: APIResponse) => response.items);
    }

    getItem(postId: number): Promise<Item> {
        return this.http.get(this.url + 'item/' + postId).toPromise().then((response: APIResponse) => response.items[0]);
    }
}
