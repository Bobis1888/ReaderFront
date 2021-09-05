import {NgModule} from '@angular/core';
import {CommonAppModule} from "../common/common-app.module";
import {AboutComponent} from "./about.component";


@NgModule({
  declarations:[
    AboutComponent
  ],
  imports: [
    CommonAppModule
  ],
})
export class AboutModule {}
