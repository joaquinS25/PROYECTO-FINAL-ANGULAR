import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from '../../store/user.actions';
import { selectUsersArray, selectUserState } from '../../store/user.selectors';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
 public displayedColumns = ['id', 'avatar', 'first_name','last_name','email'];
  public users: User[] = [];

 constructor (private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(loadUsers({page: 1, per_page:6 }));

    this.store.select(selectUsersArray)
      .subscribe((users) => {
      this.users = users;
    });
  }

  onPageChange(ev: PageEvent){
    console.log(ev);
    this.store.dispatch(loadUsers({page: ev.pageIndex + 1, per_page:6 }))
  }
}
