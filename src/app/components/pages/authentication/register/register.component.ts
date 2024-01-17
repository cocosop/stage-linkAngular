import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Entreprises } from 'src/app/components/entreprises/entreprises';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule,
    ToastrModule, MatIconModule,MatInputModule,FormsModule,ToastrModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
 
  hide = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private serviceStudent: EtudiantService,
    private serviseEntreprise: EntreprisesService,
    private toastr: ToastrService,
  ) {
    
  }
  loginform = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required, Validators.required]),
    responsable: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    adresse: new FormControl('', [Validators.required, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.required]),
    dateInscription: new FormControl(''),
    statut: new FormControl(''),
  });
  usertype: string;
  ngOnInit(): void {
    this.usertype = this.route.snapshot.paramMap.get('usertype');
    console.log(this.usertype);
    localStorage.setItem('usertype', this.usertype);
  
  }

  
 

  result: any;
  proceedlogin() {   
      if (this.loginform.status === 'VALID') {        
        const entreprise = this.loginform.value as unknown as Entreprises;
        this.serviseEntreprise.addEntreprise(entreprise).subscribe((entreprise) => {
          this.router.navigate(['/login']);  
          this.toastr.success('register success !')           
        });
      } else {
        this.toastr.error('register failed !')           
      }
  
      
}
}