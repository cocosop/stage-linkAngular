import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StagesModel } from 'src/app/components/stages/stages-model';
import StagesComponent from 'src/app/components/stages/stages.component';
import { StagesService } from 'src/app/components/stages/stages.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Entreprises } from 'src/app/components/entreprises/entreprises';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';


@Component({
  selector: 'app-pentreprise',
 
  templateUrl: './pentreprise.component.html',
  styleUrl: './pentreprise.component.scss'
})
export class PentrepriseComponent {
  formModif = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required, Validators.required]),
    responsable: new FormControl('', [Validators.required, Validators.required]),
    adresse: new FormControl('', [Validators.required, Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    motDePasse: new FormControl('', [Validators.required, Validators.required]),
    dateInscripition: new FormControl('', [Validators.required, Validators.required]),
    statut: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  formulaireModif: any;
  editData: any;
  
  constructor(
    private service: EntreprisesService, 
     
  ) { }
  ngOnInit(): void {
    if (this.editData) {
      this.formModif.controls['nomEntreprise'].setValue(this.editData.nomEntreprise)
      this.formModif.controls['responsable'].setValue(this.editData.responsable)
      this.formModif.controls['email'].setValue(this.editData.email)
      this.formModif.controls['telephone'].setValue(this.editData.telephone)
      this.formModif.controls['adresse'].setValue(this.editData.adresse)
      this.formModif.controls['dateInscription'].setValue(this.editData.dateInscription)
      this.formModif.controls['motDePasse'].setValue(this.editData.motDePasse)  
      this.formModif.controls['statut'].setValue(this.editData.statut)
      
    }

  }
  hide = true;
  value = 'Clear me';
  
  async edit() {
    if (this.formModif.status === 'VALID') {
      const entreprise = this.formModif.value as unknown as Entreprises;
      this.service.editEntreprise(this.editData.id, entreprise).subscribe((entreprise) => {
        console.log(entreprise)
      });
  
    }
  }

}
