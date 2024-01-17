import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StagesModel } from 'src/app/components/stages/stages-model';
import { StagesService } from 'src/app/components/stages/stages.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import ViewstageComponent from 'src/app/theme/shared/components/viewstage/viewstage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  value = 'Clear me'
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private stageService: StagesService, public dialog: MatDialog, private route: ActivatedRoute){
    this.filteredcards = this.stage;
}

  ngOnInit(): void {
  this.getStages();
  }
  getStages(  ){
    this.stageService.get()
    .subscribe((Response)=>{
      this.stage = Response as StagesModel[];
      this.stage =this.stage.map(item=>{
        localStorage.setItem('id', item.idStage+"");
        console.log(item.idStage);
        const deuxSemaines = 1000 * 60 * 60 * 24 * 14;
        const dateString = item.dateDebut; // Assurez-vous que la date est correctement formatée
        const date = new Date(dateString).getTime();
        console.log(date)
        const difference =date- Date.now() ;
        console.log(date)
      
    const joursEcoules = Math.floor(difference / (1000 * 60 * 60 * 24 *14));    
        return {
          ...item,
          nombreJours:joursEcoules
        }
      })
      
      this.filteredcards=this.stage
      this.totalCount = this.stage.length;
      this.filteredcards = this.stage.slice(0, this.pageSize);
      this.paginator.page.subscribe((event) => {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.totalCount) {
          endIndex = this.totalCount;
        }
        this.filteredcards = this.stage.slice(startIndex, endIndex);
       
      }
      );
     
     })
  }
  filterCardes() {    
    
      this.filteredcards = this.stage.filter(card => {      
        return card.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.titreStage.toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.entreprise.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.dateDebut.toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.dateFin.toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.idStage.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
               card.localisation.toLowerCase().includes(this.searchText.toLowerCase());
      });
    
   
  }

  onSearch() {
    this.paginator.firstPage();
    this.filterCardes();
  }

  openDialog(item) {
    this.dialog.open(ViewstageComponent,{
      data:item
    });
  }

  // handlePageEvent(e:PageEvent){
  //   this.currentPageNumber = (e.pageIndex +1);
  //   this.pageSize= e.pageSize;
  //   this.filteredcards = [];
  //   this.getStages()
  // }




}
