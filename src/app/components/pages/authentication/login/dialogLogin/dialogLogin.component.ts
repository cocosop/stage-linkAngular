import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
    selector: 'app-dialogLogin',
    standalone: true,
    imports: [CommonModule,MatCardModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatIconModule],
    templateUrl: './dialogLogin.component.html',
    styleUrls: ['./dialogLogin.component.scss']
  })
  export default class DialogLoginComponent  {
    
  }