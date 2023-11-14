import { Component, Injectable, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { StageServicesService } from './stage.services.service';
import { StageModel } from './models';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import AddstageComponent from './../addstage/addstage.component'
import StagedetailsComponent from '../stagedetails/stagedetails.component';
import { RouterModule } from '@angular/router';
import AddpostulationComponent from '../addpostulation/addpostulation.component';

@Component({
  selector: 'app-element-color',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})

export default class StagesComponents implements OnInit {
  allStages:StageModel[] = []; 

  constructor(public dialog: MatDialog, private stage: StageServicesService ) {}
  ngOnInit(): void {
    this.getApi();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddstageComponent, {
      width: '450px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      
    })
    this.dialog.open(AddpostulationComponent, {
      
    });
  }

  getApi(){
    this.stage.get()
    .subscribe((data)=>{
      this.allStages = data
      this.stage.get().forEach })
  }

  
 
}

