import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  //User List API
  private _url = "https://reqres.in/api/users?page=2";
  private users  = [];  

  constructor (private http:HttpClient){
    this.getUsers();
  }

  // Get Single User Details
  getDetails(index) {
      var name = this.users.data[index].first_name + " " + this.users.data[index].last_name + "\n";
      var email = this.users.data[index].email;
      alert("Name: " +name + "Email: " + email);
  };

  // Get User List from API
  getUsers(){
    this.http.get("https://reqres.in/api/users?page=2").subscribe((res : any[])=>{
      this.users = res;
    });
  }
  
}
