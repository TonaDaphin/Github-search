import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class InfoRequestService {

  user: User;
  // datein: User;

  constructor(private http:HttpClient) {
    this.user= new User("","", 0,0,0,new Date);
   }
   infoRequest(name:string){
    interface ApiRes{
      login:string;
      avatar_url: any;
      public_repos: number;
      followers: number;
      following:number;
      created_at: Date;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiRes>("https://api.github.com/users/" +name +"?access_token=" +environment.pass).toPromise().then(response=>{
        this.user.username = response.login
        this.user.avatar = response.avatar_url
        this.user.repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.createdDate = response.created_at

        resolve()
      },
      error=>{
        this.user.username = "Null"
        this.user.createdDate = new Date;

        reject(error)
      })
    })
    return promise
  }
}
