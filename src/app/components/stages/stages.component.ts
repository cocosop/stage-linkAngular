import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {StagesService } from './stages.service';
import {StagesModel } from './stages-model';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from  '@angular/material/form-field' ;
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule,MatIconModule,MatSelectModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatPaginatorModule,FormsModule],
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export default class StagesComponent implements OnInit{
  stage: StagesModel[] =[];
  
  totalCount: number=0;
  currentPageNumber= 1;
  pageSize: number=6;
  searchText: string = '';
  filteredcards: any[];
  constructor(private stageService: StagesService){
    this.filteredcards = this.stage;
  }
 

  ngOnInit(): void {
  this.getStages();
   
  }

  getStages(  ){
    this.stageService.GetAllUsers(this.currentPageNumber, this.pageSize)
    .subscribe((Response)=>{
      this.stage = Response.body as StagesModel[];
      this.filteredcards = Response.body as StagesModel[];
      this.totalCount = Response.headers.getAll('X-Total-Count')
      ? Number(Response.headers.getAll('X-Total-Count'))
      : 0;
     })
  }
  filterCardes() {
    this.filteredcards = this.stage.filter(card => {
      return card.description.toLowerCase().includes(this.searchText.toLowerCase()) || 
             card.titre.toLowerCase().includes(this.searchText.toLowerCase()) || 
             card.id.toString().toLowerCase().includes(this.searchText.toLowerCase()) || 
             card.localisation.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  handlePageEvent(e:PageEvent){
    this.currentPageNumber = (e.pageIndex +1);
    this.pageSize= e.pageSize;
    this.getStages()
  }
}