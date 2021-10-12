import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form = new FormGroup({
    asunto: new FormControl('', Validators.required),
    destinatario: new FormControl('', Validators.required),
    mensaje: new FormControl(''),
  }, {updateOn:'blur'});

  constructor() { }

  ngOnInit(): void {
  }

}
