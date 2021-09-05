import {NgModule} from '@angular/core';
import {CommonAppModule} from "../common/common-app.module";
import {ItemBodyComponent} from "./item/item-body.component";
import {ItemListComponent} from "./list/item-list.component";


@NgModule({
  declarations:[
    ItemBodyComponent,
    ItemListComponent
  ],
  imports: [
    CommonAppModule
  ],
})
export class ContentModule {}
