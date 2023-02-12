import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap, tap } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import {
  LoginSuccessful,
  SingleUserResponse,
} from 'src/app/models/reqres.interfaces';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducer';
import { setAuthenticatedUser } from 'src/app/store/auth/auth.actions';

@Injectable()
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService,
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) { }

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
        tap(
          (user) => this.store.dispatch(
            setAuthenticatedUser({
              authenticatedUser: user 
            })
          )
        )
      );
  }

}
