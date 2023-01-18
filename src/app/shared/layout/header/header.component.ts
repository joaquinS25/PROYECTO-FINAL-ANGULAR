import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  /*logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthenticatedUser());
    this.router.navigate(['auth', 'login']);
  }*/
}
