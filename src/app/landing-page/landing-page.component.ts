import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../user';
import { environment } from 'src/environments/environment';
import{ InfoRequestService } from '../info-http/info-request.service';
import { Repo } from '../repo';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user:User;
  repo:Repo[];

  constructor(private http:HttpClient,
     private inforequest: InfoRequestService,
     private router: ActivatedRoute
    
    ) { }

    displayRepo(repo) {
      interface ApiRes{
        name: string;
        description: string;
        homepage: string;
      }
      let promise = new Promise((resolve, reject) => {
      
        this.http.get<ApiRes>("https://api.github.com/users/" +repo +"/repos?access_token=" +environment.pass).toPromise().then(
          response => {
            for (var i in response) {
              this.repo.push(response[i]);
            }
            console.log(this.repo)
            resolve();
          },
          error => {
            this.user.avatar = "";
            this.user.username = "";

            reject(error);
          })
        })  
    }

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
  , err =>{
    this.user = new User("Sorry, an error occured","",0,0,0,new Date(2019,9,1))
    console.log("An error occured")
  }
  )
}
ngOnInit() {
  this.inforequest.infoRequest(name);

  this.user = this.inforequest.user;

  let id = this.router.snapshot.paramMap.get("id");
  this.inforequest.displayRepo(id);
  this.repo = this.inforequest.repo;
 }

}
