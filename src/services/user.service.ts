import { Injectable } from '@angular/core';
import { User } from 'src/data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = []

  constructor() { }

  register(email: string, password: string) {
    this.users.push({ email, password })
    return true
  }

  login(email: string, password: string) {
    let success = false
    this.users.forEach(user => {
      if (user.email === email && user.password === password) {
        success = true
      }
    })
    return success
  }
}
