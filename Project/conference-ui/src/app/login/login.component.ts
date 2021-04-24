import {Component, OnInit, Self} from '@angular/core';
import {RegistrationService} from '../registration.service';
import {User} from '../user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NgModule} from '@angular/core';
import {} from '../app.module';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  private cookieValue: string;

  constructor(private registrationService: RegistrationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private cookieService: CookieService
              )
        { // this.cookieService.set('Test', 'testValue');
          // this.cookieValue = this.cookieService.get('Test');
        }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    this.registrationService.loginUser(this.loginForm.value)
      .subscribe(data => {
        this.cookieService.set('username', this.loginForm.value.username);
        console.log('response received');
        console.log('connected user: ' + this.cookieService.get('username'));
        this.router.navigate(['/submit']);
        },
        error => {
          console.log('exception');
          this.message = 'Invalid credentials';
      });
  }
}
