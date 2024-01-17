// Angular import
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntrepriseModel, StagesModel } from 'src/app/components/stages/stages-model';
import StagesComponent from 'src/app/components/stages/stages.component';
import { StagesService } from 'src/app/components/stages/stages.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';
import { StageDto } from 'src/app/components/stages/stageDto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  email: any;
  entreprise: EntrepriseModel;
  stage: StageDto;
  formAdd = new FormGroup({
    titreStage: new FormControl('', [Validators.required, Validators.required]),
    localisation: new FormControl('', [Validators.required, Validators.required]),
    description: new FormControl('', [Validators.required, Validators.required]),
    dateDebut: new FormControl('', [Validators.required, Validators.required]),
    dateFin: new FormControl('', [Validators.required, Validators.required]),
  })
  
  constructor(
    private service: StagesService,
    private serviceEntreprise: EntreprisesService   
  ) { }
  ngOnInit(): void {
    this.stage = {
      idStage: 0,
      titreStage: "",
      description: "",
      localisation: "",
      dateDebut: "",
      dateFin:"",
      email:""

    }
  }
  hide = true;
  value = 'Clear me';
 
  
  save(): void {
    if (this.formAdd.status === 'VALID') {
       this.stage = this.formAdd.value as unknown as StageDto;
      this.email=localStorage.getItem("email")
      this.serviceEntreprise.getEntrepriseEmail(this.email).subscribe((resp)=>{
      this.stage.email = resp.email
        this.service.addStage(this.stage).subscribe((stage) => {
          console.log(stage)       
          this.ngOnInit()          
        });
      })
        
      
    
    }
  }
}
