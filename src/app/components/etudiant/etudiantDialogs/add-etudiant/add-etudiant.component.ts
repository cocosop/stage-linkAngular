import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import EtudiantsComponent from '../../etudiants.component';
import { EtudiantService } from '../../etudiant.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Etudiant } from '../../etudiant';

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  imports: [CommonModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
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
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent implements OnInit{
  formAdd = new FormGroup({
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
  
  
  constructor(
    public dialogRef: MatDialogRef<EtudiantsComponent>,
    private service: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public editData: any,    
  ) { }
  ngOnInit(): void { 
    this.formAdd.patchValue({
      matricule: this.service.generateMatricule()
    });  
    this.formAdd.get('matricule').disable(); // Désactiver le champ matricule
  }

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  save(): void {
    if (this.formAdd.status === 'VALID') {
      const student = this.formAdd.value as unknown as Etudiant;
      this.service.addStudent(student).subscribe((student) => {
        console.log(student) 
        this.dialogRef.close(student); 
        this.ngOnInit()    
      });
    }
  }
}
