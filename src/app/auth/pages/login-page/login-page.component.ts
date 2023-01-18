import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  public loading = false
  public form = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  })
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router,
  ) {
    this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      if (user) this.router.navigate(['home'])
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {
    this.loading = true
    this.authService.login({
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
    }).subscribe(() => this.loading = false)
  }
}
