import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';
import { Posts } from './Posts';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  api: string='http://localhost:3000/'

  constructor(private clientHttp: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any>{
    return this.clientHttp.post<any>(this.api+'auth/login', credentials);
  }

  registerUser(data:Users):Observable<any>{
    return this.clientHttp.post(this.api+'auth/register',data);
  }

  getUserbyId(id:number): Observable<any>{
    return this.clientHttp.get(this.api+'users/'+id);
  }

  getAllPosts(){
    return this.clientHttp.get(this.api+'posts')
  }

  addNewPost(data:Posts):Observable<any>{
    return this.clientHttp.post(this.api+'posts/save',data);
  }

}
