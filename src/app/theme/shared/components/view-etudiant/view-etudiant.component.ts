import { Component, Inject } from '@angular/core';
import { Etudiant } from '../../../../components/etudiant/etudiant';
import EtudiantsComponent from '../../../../components/etudiant/etudiants.component';
import { EtudiantService } from '../../../../components/etudiant/etudiant.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetudiantComponent } from '../petudiant/petudiant.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-etudiant',
  templateUrl: './view-etudiant.component.html',
  styleUrl: './view-etudiant.component.scss',
  

})
export class ViewEtudiantComponent {

  email!: string; 
  constructor(   
    private service: EtudiantService,
    public dialog: MatDialog,    
  ) { }  

  data: Etudiant;

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.service.getStudentByEmail(this.email).subscribe((Response)=>
      this.data = Response as unknown as Etudiant,    
      error => console.error(error)
    );
  }
  openDialog() {
    this.dialog.open(PetudiantComponent);
  }
}
     

