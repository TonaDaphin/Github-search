export class User {

  constructor(
     public username:string,
     public avatar:string,
     public repos:number,
     public followers:number,
     public following:number,
    public createdDate:Date,
     ){}
}

