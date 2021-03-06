import {User} from "./User";
import {Item} from "./Item";

export class APIResponse {
  constructor(
    public items?: Item[],
    public user?: User,
  ) { }
}
