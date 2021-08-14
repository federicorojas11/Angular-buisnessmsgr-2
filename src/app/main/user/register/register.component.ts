import { City } from './../../memorandum/models/city';
import { Country } from './../../memorandum/models/country';
import { UserService } from './../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  countries: Country[] = [];
  cities: City[] = [];
  countryId = 0;
  hide = true;
  color = 'grey';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.minLength(8)),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedCountry: new FormControl('', Validators.required),
    selectedCity: new FormControl('', Validators.required),
  });

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    //  Traigo paises al front desde db
    this._userService.getCountries().subscribe((e) => (this.countries = e));

    // Busqueda de ciudades de ese país
    this.form.get('selectedCountry').valueChanges.subscribe((country) => {
      this.countryId = this.findCountryId(country);
      this._userService
        .getCities(this.countryId)
        .subscribe((e) => (this.cities = e));
    });
    this.form.get('password').valueChanges.subscribe((password) => {
      if (password == '') {
        this.hide = true;
        this.color = 'grey';
      } else this.color = 'black';
    });
  }

  // Retorna el id del pais recibido por parametro
  findCountryId(country: string): number {
    let country_id = 0;
    for (let i = 0; i < this.countries.length; i++) {
      if (country == this.countries[i].name) {
        return this.countries[i].id;
      }
    }
    //console.log('country id: ' + country_id);
    return country_id;
  }

  onSubmit(form): void {
    console.log(this.form.value);
  }
}
