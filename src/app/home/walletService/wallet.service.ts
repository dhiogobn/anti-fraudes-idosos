import { Wallet } from './../../models/Wallet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  endPoint = 'http://localhost:3000/wallets'

  constructor(private http: HttpClient) { }

  public getWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.endPoint);
  }

  public CreateWallet(wallet: Wallet): Observable<any> {
    return this.http.post<any>(this.endPoint, wallet);
  }

  public getWalletById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`)
  }

  public editWallet(id: number, wallet: Wallet) {
    return this.http.put<any>(`${this.endPoint}/${id}`, wallet)
  }
}
