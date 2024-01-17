import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StagesModel } from '../../../../components/stages/stages-model';
import { StagesService } from '../../../../components/stages/stages.service';
import { ActivatedRoute } from '@angular/router';
import { PostulationService } from 'src/app/theme/shared/components/postulations/postulationService';
import { Postulation } from 'src/app/theme/shared/components/postulations/postulationModele';

@Component({
  selector: 'app-viewstage',
  templateUrl: './viewstage.component.html',
  styleUrl: './viewstage.component.scss'
})
export default class ViewstageComponent implements OnInit {
  stage: StagesModel;
  // idStage: any;
  constructor(
    private stageService: StagesService,
    private postulationService: PostulationService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: StagesModel,
  ) {}
  ngOnInit(): void {  

    this.stage=this.data;
    this.longText
    console.log(this.stage)
    localStorage.setItem("idStage",this.stage.idStage + "")



  }

  // save(): void {
    
  //     const postulation :Postulation
  //     this.postulationService.addPostulation(postulation).subscribe((postulation) => {
  //       console.log(postulation); 
  //       this.dialogRef.close(postulation);  
  //       this.ngOnInit();   
  //     }
  //     )}
  

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.
  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}