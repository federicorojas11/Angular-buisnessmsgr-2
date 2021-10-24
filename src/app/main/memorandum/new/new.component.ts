import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MemorandumService} from '../memorandum.service'
import {Memorandum} from '../models/memorandum'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from './confirm-dialog-component/confirm-dialog.component';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  options: string[] = [];
  filteredOptions: Observable<string[]>;
  destinatario = new FormControl('', Validators.required);
  memorandum:Memorandum;


  form = new FormGroup({
    asunto: new FormControl(''),
    mensaje: new FormControl(''),
  }, {updateOn:'blur'});

  constructor(public dialog: MatDialog, private _memorandumService: MemorandumService, private _userService: UserService) {
    this.memorandum = new Memorandum();
  }

  ngOnInit(): void {
    this.filteredOptions = this.destinatario.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

     this._userService.getUsers().subscribe((e) => (this.options = e.map((user)=> user.userName)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  openDialog(){
    if (this.destinatario.invalid) {
      return;
    }
    let dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
        if(result == true) {
          console.log(`true!`)

          this.memorandum.title = this.form.controls.asunto.value;
          this.memorandum.message = this.form.controls.mensaje.value;


          this._memorandumService.sendMemorandum(this.memorandum, this.destinatario.value).subscribe(result => {
            console.log(`Enviado!`)
            console.log(`${result}`)
          });


              // this.router.navigate(['/memorandum']);
        }
    })

  }
}

