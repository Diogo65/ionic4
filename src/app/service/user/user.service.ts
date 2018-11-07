import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'https://us-central1-techpoc-vector.cloudfunctions.net/user-userRouter';

  constructor(private Http: HttpClient) { }

  async create(user:any){
    let resultado = await this.Http.post(this.API, user).toPromise();

  }
}
