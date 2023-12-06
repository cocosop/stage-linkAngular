import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { StagesModel } from 'src/app/components/stages/stages-model';
import { StagesService } from 'src/app/components/stages/stages.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  stage: StagesModel[] =[];
  totalCount: number=0;
  currentPageNumber= 1;
  pageSize: number=8;
  searchText: string = '';
  filteredcards: any[];

  centered = false;
  disabled = false;
  unbounded = false;
  currentRoute: string;
  radius: number;
  color: string;
  constructor(private stageService: StagesService, public dialog: MatDialog, private route: ActivatedRoute){
    this.filteredcards = this.stage;



}
  ngOnInit(): void {

  this.getStages();

  }

  getStages(  ){
    this.stageService.GetAllStage(this.currentPageNumber, this.pageSize)
    .subscribe((Response)=>{
      this.stage = Response.body as StagesModel[];

      console.log
      this.totalCount = Response.headers.getAll('X-Total-Count')
      ? Number(Response.headers.getAll('X-Total-Count'))
      : 0;
      this.filteredcards=this.stage
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
    this.filteredcards = [];
    this.getStages()
  }




}
