import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';
import { authenticatedUserSelector } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent /*implements OnDestroy*/{
  @Output() toggleSidebar = new EventEmitter()
  //public user: User | null = null;
  /*public user: Observable<User | null>;
  constructor(public readonly authService: AuthService, private readonly store: Store<AppState>) {
   this.user  = this.store.select(authenticatedUserSelector)
  }
  ngOnDestroy(): void {}*/


  /*logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthenticatedUser());
    this.router.navigate(['auth', 'login']);
  }*/
}
