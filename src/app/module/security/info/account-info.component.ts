import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/User';
import { Router } from '@angular/router';
import {AccountService} from "../../../services/account.service";

@Component({
  templateUrl: './account-info.component.html',
  providers: [AccountService],
  styleUrls: ['../../components.css']
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
