import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLogged: boolean = false
  users: any[] = []
  login: any;
  password: any;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe((res) => this.users = res);
  }

  verificarConta() {
    console.log(this.login)
    console.log(this.password)
    this.isLogged = false;
    for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].login === this.login && this.users[index].password === this.password){
        this.isLogged = true
        this.router.navigate(['gender'])
      }
    }
    if(!this.isLogged) {
      alert("Usuário ou senha invalidos!")

    }
  }

  loggout() {
    this.isLogged = !this.isLogged
  }



}
