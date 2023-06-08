import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://fakestoreapi.com/auth/login'

  constructor(private http: HttpClient) { }
}
