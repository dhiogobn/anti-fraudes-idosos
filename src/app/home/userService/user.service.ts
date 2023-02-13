import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endPoint);
  }

  public CreateUser(user: User): Observable<any> {
    return this.http.post<any>(this.endPoint, user);
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`)
  }

}
