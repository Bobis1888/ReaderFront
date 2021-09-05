import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "../content/list/item-list.component";
import {ItemBodyComponent} from "../content/item/item-body.component";
import {LoginComponent} from "../security/login/login.component";
import {RegistrationComponent} from "../security/registration/registration.component";
import {AboutComponent} from "../about/about.component";
import {AccountInfoComponent} from "../security/info/account-info.component";
import {FeedBackComponent} from "../feedback/feedback.component";
import {NotFoundComponent} from "../not-found.component";

const appsRoutes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'body/:postId', component: ItemBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'info', component: AccountInfoComponent },
  { path: 'feedback', component: FeedBackComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
