import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './module/main/main.component';
import { NotFoundComponent } from './module/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SecurityModule} from "./module/security/security.module";
import {ContentModule} from "./module/content/content.module";
import {FeedbackModule} from "./module/feedback/feedback.module";
import {AboutModule} from "./module/about/about.module";
import {CommonAppModule} from "./module/common/common-app.module";

@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CommonAppModule,
    SecurityModule,
    FeedbackModule,
    BrowserModule,
    ContentModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
