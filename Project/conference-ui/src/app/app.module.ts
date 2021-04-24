import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnterComponent } from './enter/enter.component';
import { PaperSubmitComponent } from './paper-submit/paper-submit.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieService, CookieModule} from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EnterComponent,
    PaperSubmitComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'enter',
        component: EnterComponent
      },
      {
        path: 'submit',
        component: PaperSubmitComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
