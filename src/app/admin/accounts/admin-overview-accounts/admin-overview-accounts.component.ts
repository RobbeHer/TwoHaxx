import { Component, OnInit } from '@angular/core';
import { Observable }​​​​​​​ from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-overview-accounts',
  templateUrl: './admin-overview-accounts.component.html',
  styleUrls: ['./admin-overview-accounts.component.scss']
})
export class AdminOverviewAccountsComponent implements OnInit {
  
  users: User[];
  searchText: string = "";
  filterUsers: User[];
  orderAlphabetically: number = 0;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically

  constructor(private _userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
      this.filterUsers = this.users;
    });
  }

  deleteUser(userID: number) {
    this._userService.deleteUser(userID).subscribe(() => {
      this.getUsers();
    }​​​​​);
  }

  orderByName() {
    switch (this.orderAlphabetically) {
      case 1: this.orderAlphabetically = 2; break;
      default: this.orderAlphabetically = 1;
    }
    this.filterUsers.sort((a, b) => {
      return (this.orderAlphabetically == 1) ? (a.firstName > b.firstName) ? 1 : -1 : (a.firstName > b.firstName) ? -1 : 1;
    });
  }

  filterMatchFirstName(user: User) {
    return user.firstName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
  }

  filterMatchLastName(user: User) {
    return user.lastName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
  }

  filter() {
    if (this.searchText.length !== 0) {
      this.filterUsers = this.users.map(user => {
        return (this.filterMatchFirstName(user) || this.filterMatchLastName(user)) ? user : null;
      }).filter((x): x is User => x !== null);
    } else {
      this.filterUsers = this.users;
    }
  }

  clearFilter() {
    this.searchText = "";
    this.filterUsers = this.users;
  }


  ngOnInit(): void {}
}
