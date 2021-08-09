import { Country } from './../../memorandum/models/country';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  countries: Country[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    //  Traigo paises al front desde db
    this._userService.getCountries().subscribe((e) => (this.countries = e));
  }
}
