import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor(private http:HttpClient)
    { }
    seeRepo(){
      interface ApiRes{
        name:string;
        description: string;
        homepage: string;
      }
    }
  ngOnInit() {
  }

}
