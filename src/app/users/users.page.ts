import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  usersArray = [];

  constructor(private rs: UsersService) { }

  ngOnInit() {
    this.rs.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.usersArray = response.data;
    });
  }

}
