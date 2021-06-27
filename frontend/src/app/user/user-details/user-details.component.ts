import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AddbtnClick() {
    this.router.navigate(['/user-add']);
  }

  EditbtnClick() {
    this.router.navigate(['./user-edit'])
  }
  DeletebtnClick() {
    this.router.navigate(['./user-delete'])
  }
}
