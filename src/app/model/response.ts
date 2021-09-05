import {User} from './User';
import {Item} from './Item';

export interface Response {
    user:User;
    items:Item[];
}