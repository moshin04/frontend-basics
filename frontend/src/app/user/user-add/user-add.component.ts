import { Component, OnInit } from '@angular/core';
import { Useraddmodel } from '../models/user-model-add';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  usermodel = new Useraddmodel();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.usermodel);
  }

  onSubmit() {
    this.http.post('http://localhost:3001/api/users/insert-user', this.usermodel, {})
      .subscribe(
        response => {
          console.log("POST completed sucessfully. The response received " + response);
        },
        error => {
          console.log("Post failed with the errors");
        },
        () => {
          console.log("Post Completed");
        }
      )
    // return this.http.post('http://localhost:3001/api/users/insert-user', this.usermodel).subscribe((response: any) ⇒ console.log(data))

    // console.log(this.usermodel);
  }


  // addUser(user: any): Observable<any> {
  //   console.log('user 17:', user);
  //   console.log('in service 18:', url + '/api/users/insert-user');

  //   return this.http.post<any>(url + '/api/users/insert-user', user);
  // }

}
