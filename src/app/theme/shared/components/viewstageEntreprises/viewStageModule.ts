import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import ViewstageComponent from './viewstageEntreprises.component';
import { MatCardModule } from '@angular/material/card';
import ViewstageEntreprises from './viewstageEntreprises.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';



@NgModule({
  declarations: [ViewstageEntreprises],
  imports: [
    CommonModule,
    CommonModule,   
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  exports: [ViewstageEntreprises]
})
export class ViewstageEntrepriseModule { }
