import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {User} from '../user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';

  constructor(private registrationService: RegistrationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    this.registrationService.loginUser(this.loginForm.value)
      .subscribe(data => {
        console.log('response received');
        this.router.navigate(['/submit']);
        },
        error => {
          console.log('exception');
          this.message = 'Invalid credentials';
      });
  }
}
