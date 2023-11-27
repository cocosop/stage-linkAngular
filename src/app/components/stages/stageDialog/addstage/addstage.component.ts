import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import StagesComponent from '../../stages.component';
import { StagesService } from '../../stages.service';
import { StagesModel } from '../../stages-model';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-addstage',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,            
    ReactiveFormsModule,
    MatNativeDateModule,
  MatCardModule],
  templateUrl: './addstage.component.html',
  styleUrl: './addstage.component.scss'
})
export default class AddstageComponent implements OnInit{
  formAdd = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.required]),
    localisation: new FormControl('', [Validators.required, Validators.required]),
    description: new FormControl('', [Validators.required, Validators.required]),
   
  })
  fileName: any;
  
  
  constructor(
    public dialogRef: MatDialogRef<StagesComponent>,
    private service: StagesService,
    @Inject(MAT_DIALOG_DATA) public editData: any,    
  ) { }
  ngOnInit(): void {   
    
  }
 

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  save(): void {
    if (this.formAdd.status === 'VALID') {
      const stage = this.formAdd.value as unknown as StagesModel;
      this.service.addStage(stage).subscribe((stage) => {
        console.log(stage) 
        this.dialogRef.close(stage); 
        this.ngOnInit()    
      });
    }
  }

}
