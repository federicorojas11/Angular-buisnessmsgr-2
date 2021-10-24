import { User } from './../../memorandum/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  color = 'grey';
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  } , {updateOn:'blur'});
  submitted = false;


  constructor(private _userService: UserService, private router: Router) {}

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
    this._userService.logIn(user).subscribe(( loggedUser ) => {
      this._userService.asignToken(loggedUser.token);
    });

    this.router.navigate(['/memorandum']);
  }

  getErrorMessage(message:string) {
    if (this.form.controls.user.hasError('required')) {
      return message;
    }
    return this.form.controls.user.hasError('user') ? 'El usuario no existe' : '';
  }
}
