import { Wallet } from './Wallet';
export class User {
   id: number;
   login: string;
   password: string;
   email: string;
   birthDate: Date;
   city: string;
   state: string;
   wallet: Wallet;
   image: string;

   constructor(id: number, login: string, password: string, email: string, birthdate: Date, city: string, state: string, wallet: Wallet, image: string) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.email = email;
    this.birthDate = birthdate;
    this.city = city;
    this.state = state;
    this.wallet = wallet;
    this.image = image;
   }

}