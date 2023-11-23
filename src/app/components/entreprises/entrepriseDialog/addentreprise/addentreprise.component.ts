import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormGroup, FormControl, Validators,FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import EntreprisesComponent from '../../entreprises.component';
import { Entreprises } from '../../entreprises';
import { EntreprisesService } from '../../entreprises.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-addentreprise',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
    ],
  templateUrl: './addentreprise.component.html',
  styleUrl: './addentreprise.component.scss'
})
export default class AddentrepriseComponent implements OnInit{
  formAdd = new FormGroup({
    responsable: new FormControl('', [Validators.required, Validators.required]),
    nomEntreprise: new FormControl('', [Validators.required, Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),   
    adresse: new FormControl('', [Validators.required, Validators.required]),
    motDePasse: new FormControl('', [Validators.required, Validators.required]),
    dateInscription: new FormControl('', [Validators.required, Validators.required]),
    stage: new FormControl('', [Validators.required, Validators.required]),
    statut: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  
  
  constructor(
    public dialogRef: MatDialogRef<EntreprisesComponent>,
    private service: EntreprisesService,
    @Inject(MAT_DIALOG_DATA) public editData: any,    
  ) { }
  ngOnInit(): void {
    
  }

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  save(): void {
    if (this.formAdd.status === 'VALID') {
      const entreprise = this.formAdd.value as unknown as Entreprises;
      this.service.addEntreprise(entreprise).subscribe((entreprise) => {
        console.log(entreprise); 
        this.dialogRef.close(entreprise);  
        this.ngOnInit();   
      });
    }
  }

  

  

}
