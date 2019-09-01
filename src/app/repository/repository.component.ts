import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';
import { environment } from 'src/environments/environment';
import { User} from '../user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

repo:Repo;

  constructor(private http:HttpClient)
    { }
    seeRepo(newUser:string){
      interface ApiRes{
        name:string;
        description: string;
        homepage: string;
      }
      this.http.get<ApiRes>("https://api.github.com/users/"+newUser+"?access_token="+(environment.pass)).subscribe(data1=>{
        // Succesful API request
        this.repo = new Repo(data1.name, data1.description, data1.homepage)
      }
      , err =>{
        this.repo = new Repo("Sorry, an error occured",""," ")
        console.log("An error occured")
      }
      )
    }
  ngOnInit() {
  }

}
