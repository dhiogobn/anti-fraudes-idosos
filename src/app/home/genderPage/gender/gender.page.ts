import { UserService } from './../../userService/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  redirectToSocial() {
    this.router.navigate(['/social'])
  }

  redirectToWallet() {
    this.router.navigate([`user/${this.router.url.split("/")[2]}/wallet`])
  }

}
