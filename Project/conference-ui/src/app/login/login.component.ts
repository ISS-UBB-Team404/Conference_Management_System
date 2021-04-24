import {Component, OnInit, Self} from '@angular/core';
import {RegistrationService} from '../registration.service';
import {User} from '../user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NgModule} from '@angular/core';
import {} from '../app.module';
import {CookieController} from '../CookieController';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  private cookieValue: string;
  private currentUser: User;

  constructor(private registrationService: RegistrationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private cookieService: CookieController
              )
        {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    this.currentUser = this.registrationService.loginUser(this.loginForm.value)
      .subscribe(data => {
        console.log('Login get Data: ', data);
        this.cookieService.setCookie('username', this.loginForm.value.username);
        this.cookieService.setCookie('userId', data.id);
        this.cookieService.setCookie('userType', data.type);
        console.log('response received');
        console.log('connected user: ' + this.cookieService.getCookie('username') +
                    ' with id: ' + this.cookieService.getCookie('userId'));
        this.router.navigate(['/submit']);
        },
        error => {
          console.log('exception');
          this.message = 'Invalid credentials';
      });
  }
}
