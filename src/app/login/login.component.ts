import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  })

  captchaForm = this.formBuilder.group({
    text: ''
  })
  attempts = 0
  message = ''
  captcha = false

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = ''
    this.captcha = false
  }

  onSubmit() {
    if (this.attempts < 3) {
      this.message = ''
      this.attempts += 1
      if (this.userService.login(this.loginForm.value.email, this.loginForm.value.password)) {
        this.message = 'Logged in'
        this.captcha = false
        this.router.navigateByUrl('')
      } else {
        this.message = 'Login unsuccessful'
        if (this.attempts >= 3) {
          this.message = 'Too many failed login attemts. Please solve this captcha.'
          this.captcha = true
        }
      }
    }
  }

  onCaptchaSubmit() {
    if (this.captchaForm.value.text === 'captcha') {
      this.message = ''
      this.attempts = 0
      this.captcha = false
    }
  }
}
