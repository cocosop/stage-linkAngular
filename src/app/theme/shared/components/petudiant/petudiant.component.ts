import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Etudiant } from 'src/app/components/etudiant/etudiant';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';


@Component({
  selector: 'app-petudiant', 
  templateUrl: './petudiant.component.html',
  styleUrl: './petudiant.component.scss'
})
export class PetudiantComponent {
 
  userForm = new FormGroup({
    nomEtudiant: new FormControl('', [Validators.required]),
    prenomEtudiant: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    interets: new FormControl('', [Validators.required]),
    parcoursAcademique: new FormControl('', [Validators.required]),
    competences: new FormControl('', [Validators.required]),
    cv: new FormControl('', [Validators.required]),
    dateInscription: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]) 
  })
    
  email: string;
  constructor(
    private service: EtudiantService,
    public dialogRef: MatDialogRef<Etudiant>,   
    
  ) { }
 

  ngOnInit(): void {      
    this.email = localStorage.getItem('email');
    this.service.getStudentByEmail(this.email).subscribe((user) => {
      this.userForm.setValue(user);
    });
  }
 
 
  async edit() {    
    if (this.userForm.status === 'VALID') {      
      const etudiant = this.userForm.value as unknown as Etudiant;
      this.service.editStudent(etudiant).subscribe((etudiant) => {
        this.dialogRef.close(etudiant);
        console.log(etudiant);   
      });  
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
