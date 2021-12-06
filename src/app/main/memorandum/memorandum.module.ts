import { ReceivedComponent } from './received/received.component';
import { NewComponent } from './new/new.component';
import { SentComponent } from './sent/sent.component';
import { MemorandumRoutingModule } from './memorandum-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorandumComponent } from './memorandum.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    MemorandumComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
    MemorandumComponent,
  ],
  imports: [
    CommonModule,
    MemorandumRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
})
export class MemorandumModule {}
