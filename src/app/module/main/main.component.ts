import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from "../../model/User";
import { AccountService } from "../../services/account.service";
import { MatSidenavContainer} from '@angular/material/sidenav';
import { Router } from "@angular/router";

@Component({
    selector: 'app',
    templateUrl: './main.component.html',
    styleUrls: ['../components.css'],
    providers: [AccountService]
  })
export class MainComponent implements OnInit, AfterViewInit {

  reference: any;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  snavOpened: boolean = false;

  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
      private accountService: AccountService,
      private router: Router) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.snavOpened = true;
    },1000)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onActivate (componentReference) {
    this.reference = componentReference;
  }

  getCurrentAccount(): User {
    return AccountService.currentUser;
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/'])
  }

}
