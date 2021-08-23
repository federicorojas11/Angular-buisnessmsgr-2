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
    user: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  } , {updateOn:'blur'});
  submitted = false;


  constructor(private _userService: UserService) {}

  ngOnInit(): void {

    this.form.get('password').valueChanges.subscribe((password) => {
      if (password == '') {
        this.hide = true;
        this.color = 'grey';
      } else this.color = 'black';
    } );
  }

  onSubmit(user: User) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this._userService.logIn(user);
    console.log('post');
  }

  getErrorMessage(message:string) {
    if (this.form.controls.user.hasError('required')) {
      return message;
    }
    return this.form.controls.user.hasError('user') ? 'El usuario no existe' : '';
  }
}
