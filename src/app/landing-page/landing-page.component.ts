import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../user';
import { environment } from 'src/environments/environment';
// import{ InfoRequestService } from '../info-http/info-request.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user:User;

  constructor(private http:HttpClient
    //  private inforequest: InfoRequestService
    ) { }
 searchUser(newUser:string){
  interface ApiRes{
    login:string;
    avatar_url: any;
    public_repos: number;
    followers: number;
    following:number;
    created_at: Date;
 }
 

  this.http.get<ApiRes>("https://api.github.com/users/"+newUser+"?access_token="+(environment.pass)).subscribe(data=>{
    // Succesful API request
    this.user = new User(data.login, data.avatar_url, data.public_repos, data.followers, data.following, data.created_at)
  }
  // , err =>{
  //   this.user = new User("This username doesnt exist",new Date(2019,9,1))
  //   console.log("An error occured")
  // }
  )
}
ngOnInit() { }

}
