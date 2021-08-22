import { HttpClient } from '@angular/common/http';
import { User } from './../../memorandum/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  color = 'grey';
  form = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.form.get('password').valueChanges.subscribe((password) => {
      if (password == '') {
        this.hide = true;
        this.color = 'grey';
      } else this.color = 'black';
    });
  }

  onSubmit(user: User) {
    this._userService.logIn(user);
    console.log('post');
  }
}
