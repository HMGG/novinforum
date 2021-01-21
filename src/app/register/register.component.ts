import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    email: '',
    password: '',
    password2: ''
  })

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regex.test(this.registerForm.value.email) === false) {
      alert("E-mail is invalid")
    } else if (this.registerForm.value.password === '') {
      alert("Password is required")
    } else if (this.registerForm.value.password !== this.registerForm.value.password2) {
      alert("Passwords don't match")
    } else if (this.userService.register(this.registerForm.value.email, this.registerForm.value.password)) {
      this.router.navigateByUrl('')
    }
  }

}
