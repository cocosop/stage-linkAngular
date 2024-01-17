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
import { ViewEtudiantComponent } from './view-etudiant.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ViewEtudiantComponent],
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
    MatDatepickerModule,
    MatCardModule,
    MatListModule
  ],
  exports: [ViewEtudiantComponent]
})
export class ViewEtudiantModule { }
