import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnterComponent } from './enter/enter.component';
import { PaperSubmitComponent } from './paper-submit/paper-submit.component';
import { AdminComponent } from './admin/admin.component';
import { ChairComponent } from './chair/chair.component';
import { ListenerComponent } from './listener/listener.component';
import { ConferenceUpdateComponent } from './chair/conference-update/conference-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EnterComponent,
    PaperSubmitComponent,
    AdminComponent,
    ChairComponent,
    ListenerComponent,
    ConferenceUpdateComponent
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
        path: 'submit/:id',
        component: PaperSubmitComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'chair',
        component: ChairComponent
      },
      {
        path: 'chair/:id',
        component: ChairComponent
      },
      {
        path: 'listener',
        component: ListenerComponent
      },
      {
        path: 'chair-update-conference',
        component: ConferenceUpdateComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
