import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Etudiant } from '../../etudiant';
import { EtudiantService } from '../../etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  standalone: true,
  imports: [CommonModule, 
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatSelectModule,
            MatIconModule,    
            ReactiveFormsModule,
            MatNativeDateModule,
    
],
  templateUrl: './update-etudiant.component.html',
  styleUrl: './update-etudiant.component.scss'
})
export class UpdateEtudiantComponent implements OnInit{
  formModif = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.required]),
    prenom: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    matricule: new FormControl('', [Validators.required, Validators.required]),
    motDePasse: new FormControl('', [Validators.required, Validators.required]),
    statut: new FormControl('', [Validators.required, Validators.required]),
    competences: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  formulaireModif: any;

  constructor(
    public dialogRef: MatDialogRef<Etudiant>,
    private service: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    
  ) { }

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  id: any;
  ngOnInit(): void {
    if (this.editData) {
      this.formModif.controls['name'].setValue(this.editData.name)
      this.formModif.controls['prenom'].setValue(this.editData.prenom)
      this.formModif.controls['email'].setValue(this.editData.email)
      this.formModif.controls['telephone'].setValue(this.editData.telephone)
      this.formModif.controls['motDePasse'].setValue(this.editData.motDePasse)
      this.formModif.controls['competences'].setValue(this.editData.competences)
      this.formModif.controls['matricule'].setValue(this.editData.matricule)
      this.formModif.controls['motDePasse'].setValue(this.editData.motDePasse)
      this.formModif.controls['statut'].setValue(this.editData.statut)
    }

}

// async edit() {
//   if (this.formModif.status === 'VALID') {
//     const student = this.formModif.value as unknown as Etudiant;
//     this.service.editStudent(this.editData.id, student).subscribe((student) => {
//       this.dialogRef.close(student);
//     });

//   }
// }
}