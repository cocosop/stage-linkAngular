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
import { FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import AddstageComponent from './stageDialog/addstage/addstage.component';
import {MatMenuModule} from '@angular/material/menu';
import { DeletestageComponent } from './stageDialog/deletestage/deletestage.component';
import { UpdatestageComponent } from './stageDialog/updatestage/updatestage.component';
import { Route, RouterModule } from '@angular/router';


@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule,MatIconModule,MatSelectModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatPaginatorModule,FormsModule, MatInputModule, MatIconModule,MatMenuModule,RouterModule],
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export default class StagesComponent implements OnInit{
  stage: StagesModel[] =[];
  totalCount: number=0;
  currentPageNumber= 1;
  pageSize: number=8;
  searchText: string = '';
  filteredcards: any[];
  constructor(private stageService: StagesService, public dialog: MatDialog){
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
             card.nomEntreprise.toLowerCase().includes(this.searchText.toLowerCase()) ||
             card.dateDebut.toLowerCase().includes(this.searchText.toLowerCase()) ||
             card.dateFin.toLowerCase().includes(this.searchText.toLowerCase()) ||
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



  closeDialog(stage: StagesModel) {
    this.stage.push(stage);
    this.stage = [...this.stage];
  }

  openDialogAdd(): void {
    this.dialog.open(AddstageComponent, {
      width: '550px',
    }).afterClosed().subscribe((stage) => {
      if (stage) {
      };
    })
  }
  openDialogDelete(item: any) {
    this.dialog.open(DeletestageComponent, {
      width: '350px',
      data: item
    }).afterClosed().subscribe((stage) => {
      if (stage) {
        this.closeDialog(stage);
        this.getStages()
      };
    })
  }
  openDialogEdit(item: any) {
    this.dialog.open(UpdatestageComponent, {
      width: '550px',
      data: item
    }).afterClosed().subscribe((stage) => {
      if (stage) {
        this.closeDialog(stage);

      };
    })
  }


}
