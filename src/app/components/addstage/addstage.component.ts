import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-addstage',
  standalone: true,
  imports: [CommonModule,MatDialogModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.scss']
})
export default class AddstageComponent {
  constructor(public dialogRef: MatDialogRef<AddstageComponent>) {}

}
