import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Entreprises } from 'src/app/components/entreprises/entreprises';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';
import { Etudiant } from 'src/app/components/etudiant/etudiant';


@Component({
  selector: 'app-pentreprise', 
  templateUrl: './pentreprise.component.html',
  styleUrl: './pentreprise.component.scss'
})
export class PentrepriseComponent {
 
  userForm = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required]),
    responsable: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    dateInscription: new FormControl('', [Validators.required]),
  })
    
  email: string;
  constructor(
    private service: EntreprisesService,
    public dialogRef: MatDialogRef<Entreprises>, 
  ) { }
 

  ngOnInit(): void {      
    this.email = localStorage.getItem('email');
    this.service.getEntrepriseEmail(this.email).subscribe((user) => {
      this.userForm.setValue(user);
    });
  }
 
 
  async edit() {    
    if (this.userForm.status === 'VALID') {      
      const entreprise = this.userForm.value as unknown as Entreprises;
      this.service.editEntreprise(entreprise).subscribe((entreprise) => {
        this.dialogRef.close(entreprise);
        console.log(entreprise)
       
      });
  
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
