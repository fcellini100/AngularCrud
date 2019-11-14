import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  userList : User[] = [
    new User("Fernando", "Cellini", 1),
    new User("Fernando2", "Cellini2", 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
