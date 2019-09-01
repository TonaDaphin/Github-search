import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';
import { environment } from 'src/environments/environment';
import { User} from '../user';
import{ InfoRequestService } from '../info-http/info-request.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

// repo:Repo[];
// user: User;

  constructor(private http:HttpClient,
    private inforequest: InfoRequestService,
    // private router: ActivatedRoute
    )
    { }
    // displayRepo(repo) {
    //   interface ApiRes{
    //     name: string;
    //     description: string;
    //     homepage: string;
    //   }
    //   let promise = new Promise((resolve, reject) => {
      
    //     this.http.get<ApiRes>("https://api.github.com/users/" +repo +"/repos?access_token=" +environment.pass).toPromise().then(
    //       response => {
    //         for (var i in response) {
    //           this.repo.push(response[i]);
    //         }
    //         console.log(this.repo)
    //         resolve();
    //       },
    //       error => {
    //         this.user.avatar = "";
    //         this.user.username = "";

    //         reject(error);
    //       })
    //     })  
    // }
  ngOnInit() {
    // let id = this.router.snapshot.paramMap.get("id");
    // this.inforequest.displayRepo(id);
    // this.repo = this.inforequest.repo;
  }

}
