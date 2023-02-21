import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersStoreModule } from './users/users-store.module';



@NgModule({
  declarations: [],
  imports: [
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    UsersStoreModule,
  ]
})
export class AppStoreModule { }
