// Angular import
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StagesModel } from 'src/app/components/stages/stages-model';
import StagesComponent from 'src/app/components/stages/stages.component';
import { StagesService } from 'src/app/components/stages/stages.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  formAdd = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.required]),
    localisation: new FormControl('', [Validators.required, Validators.required]),
    description: new FormControl('', [Validators.required, Validators.required]),
    nomEntreprise: new FormControl('', [Validators.required, Validators.required]),
    domaine: new FormControl('', [Validators.required, Validators.required]),
    dateDebut: new FormControl('', [Validators.required, Validators.required]),
    dateFin: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  constructor(
    private service: StagesService,   
  ) { }
  ngOnInit(): void {

  }
  hide = true;
  value = 'Clear me';
  
  save(): void {
    if (this.formAdd.status === 'VALID') {
      const stage = this.formAdd.value as unknown as StagesModel;
      this.service.addStage(stage).subscribe((stage) => {
        console.log(stage)       
        this.ngOnInit()
      });
    }
  }
}
