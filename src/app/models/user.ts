export class User {
   id: number;
   login: string;
   password: string;
   email: string;
   birthDate: Date;
   city: string;
   state: string;

   constructor(id: number, login: string, password: string, email: string, birthdate: Date, city: string, state: string) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.email = email;
    this.birthDate = birthdate;
    this.city = city;
    this.state = state;
   }

}