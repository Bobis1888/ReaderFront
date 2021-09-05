import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AccountInfoComponent} from "./info/account-info.component";
import {CommonAppModule} from "../common/common-app.module";


@NgModule({
  declarations:[
    LoginComponent,
    RegistrationComponent,
    AccountInfoComponent,
  ],
  imports: [
    CommonAppModule
  ],
})
export class SecurityModule {}
