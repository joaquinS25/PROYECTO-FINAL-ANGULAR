import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
 public displayedColumns = ['id', 'avatar', 'firs_name','last_name','email'];
}
