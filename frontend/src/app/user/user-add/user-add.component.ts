import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../models/user-model-add';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  usermodel = new Usermodel();

  constructor() { }

  ngOnInit(): void {
  }

}
