import {NgModule} from '@angular/core';
import {CommonAppModule} from "../common/common-app.module";
import {FeedBackComponent} from "./feedback.component";

@NgModule({
  declarations:[
    FeedBackComponent
  ],
  imports: [
    CommonAppModule
  ],
})
export class FeedbackModule {}
