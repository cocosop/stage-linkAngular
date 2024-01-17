import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StagesModel } from '../../../../components/stages/stages-model';
import { StagesService } from '../../../../components/stages/stages.service';
import { ActivatedRoute } from '@angular/router';
import { PostulationService } from 'src/app/theme/shared/components/postulations/postulationService';
import { Postulation } from 'src/app/theme/shared/components/postulations/postulationModele';
import { StageDto } from 'src/app/components/stages/stageDto';
import PostulationsComponent from '../postulations/postulations.component';
import CandidaturesComponent from '../candidatures/candidatures.component';

@Component({
  selector: 'app-viewstageEntreprises',
  templateUrl: './viewstageEntreprises.component.html',
  styleUrl: './viewstageEntreprises.component.scss'
})
export default class ViewstageEntreprises implements OnInit {
  stage: StagesModel[];
  email: any;
  constructor(
    private stageService: StagesService,
    private postulationService: PostulationService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    
  ) {}
  ngOnInit(): void {  
    this.stage = []
    this.getStages(  )
   

  }


  getStages(  ){
    this.email= localStorage.getItem("email")
    this.stageService.getStageByEmail(this.email).subscribe((res)=>{
     this.stage = res;
      }) 
    }

    openDialog(item) {
      this.dialog.open(CandidaturesComponent,{
        data :item
        
      });    
}

}

  // save(): void {
    
  //     const postulation :Postulation
  //     this.postulationService.addPostulation(postulation).subscribe((postulation) => {
  //       console.log(postulation); 
  //       this.dialogRef.close(postulation);  
  //       this.ngOnInit();   
  //     }
  //     )}
  

  

