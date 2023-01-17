import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, take } from 'rxjs';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user = new BehaviorSubject<User | null>(null)
  public user$ = this.user.asObservable();

  constructor() {}

  setUser(user: User): void {
    this.user.next(user);
  }

  updateSessionUser(data: Partial<User>) {
    this.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.setUser(
          new User(
            data.id || user.id,
            data.email || user.email,
            data.first_name || user.first_name,
            data.last_name || user.last_name,
            data.avatar || user.avatar,
          )
        )
      }
    })
  }
}
