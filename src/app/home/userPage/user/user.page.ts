import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../../userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  users: any[] = []

  user: any;
  login: any;
  password: any;
  confirmPassword: any;
  email: any;
  birthDate: any;
  city: any;
  state: any;

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe((res) => this.users = res);
  }

  ngOnInit() {
    console.log(this.users)
  }

  registrarUsuario() {
    if (this.login && this.password && this.confirmPassword && this.email && this.birthDate && this.city && this.state) {
      this.user = {login: this.login, password: this.checkPassword(this.password, this.confirmPassword), email: this.email, birthDate: this.birthDate, city: this.city, state: this.state};
      this.userService.CreateUser(this.user).subscribe(res => {})
    }else {
      alert('Erro! Verifique se deixou algum campo vazio')
    }

  }

  checkPassword(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      return this.password
    }
  }

  print() {
    console.log(this.login)
  }

  setLogin(value: any) {
    this.login = value.data;
    console.log(this.login)
  }


}
