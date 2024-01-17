import { Component, Inject, OnInit } from '@angular/core';
import { Etudiant } from '../../../../components/etudiant/etudiant';
import { EtudiantService } from '../../../../components/etudiant/etudiant.service';
import { PetudiantComponent } from '../petudiant/petudiant.component';
import { MatDialog } from '@angular/material/dialog';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';
import { Entreprises } from 'src/app/components/entreprises/entreprises';
import { PentrepriseComponent } from '../pentreprise/pentreprise.component';

@Component({
  selector: 'app-viewentreprise',
  templateUrl: './viewentreprise.component.html',
  styleUrl: './viewentreprise.component.scss',
  

})
export class ViewentrepriseComponent implements OnInit {

  email!: string; 
  constructor(   
    private service: EntreprisesService,
    public dialog: MatDialog,    
  ) { }  

  data: Entreprises;

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.service.getEntrepriseEmail(this.email).subscribe((Response)=>
      this.data = Response as unknown as Entreprises,    
      error => console.error(error)
    );
  }
  openDialog() {
    this.dialog.open(PentrepriseComponent);
  }
}
     

