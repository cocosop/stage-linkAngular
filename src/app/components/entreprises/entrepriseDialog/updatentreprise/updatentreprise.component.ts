import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Etudiant } from 'src/app/components/etudiant/etudiant';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';
import { Entreprises } from '../../entreprises';
import { EntreprisesService } from '../../entreprises.service';

@Component({
  selector: 'app-updatentreprise',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,    
    ReactiveFormsModule,
    MatNativeDateModule,],
  templateUrl: './updatentreprise.component.html',
  styleUrl: './updatentreprise.component.scss'
})
export class UpdatentrepriseComponent {
  formModif = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required, Validators.required]),
    responsable: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    adresse: new FormControl('', [Validators.required, Validators.required]),
    motDePasse: new FormControl('', [Validators.required, Validators.required]),
    dateInscription: new FormControl('', [Validators.required, Validators.required]),
    statut: new FormControl('', [Validators.required, Validators.required]),
    stage: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  formulaireModif: any;

  constructor(
    public dialogRef: MatDialogRef<Entreprises>,
    private service: EntreprisesService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    
  ) { }

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  id: any;
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
      this.formModif.controls['stage'].setValue(this.editData.stage)
    }

}

async edit() {
  if (this.formModif.status === 'VALID') {
    const entreprise = this.formModif.value as unknown as Entreprises;
    this.service.editEntreprise(entreprise).subscribe((entreprise) => {
      this.dialogRef.close(entreprise);
      this.ngOnInit()
    });
    
  }
}
}
