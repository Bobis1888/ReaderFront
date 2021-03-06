import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { catchError,tap } from 'rxjs/operators';

@Component({
  templateUrl: './account-info.component.html',
  providers: [AccountService],
  styleUrls: ['../components.css']
})
export class AccountInfoComponent implements OnInit{

  progress = true;
  user: User;

  constructor(private accountService: AccountService,private router: Router) {}


  ngOnInit() {
    this.user = this.accountService.getCurrentUser();
    this.progress = false;
  }

  load() {

  }

}
