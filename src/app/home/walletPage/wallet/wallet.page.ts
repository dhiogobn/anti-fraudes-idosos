import { Wallet } from './../../../models/Wallet';
import { User } from 'src/app/models/user';
import { UserService } from './../../userService/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  user: any
  points: any
  login: any

  constructor(private UserService : UserService, private router: Router) { }

  ngOnInit() {
    this.UserService.getUserById(Number.parseInt(`${this.router.url.split("/")[2]}`)).subscribe((res) => {
      this.user = res
      this.points = res.wallet.points
      this.login = res.login
      console.log(this.user)
      console.log(this.login)
    })

  }

  redirectToGender() {
    this.router.navigate([`user/${this.router.url.split("/")[2]}/gender`])
  }

}
