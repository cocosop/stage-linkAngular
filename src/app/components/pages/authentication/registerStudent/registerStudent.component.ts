import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
import { Etudiant } from 'src/app/components/etudiant/etudiant';

@Component({
  selector: 'app-registerStudent',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule,MatInputModule,FormsModule],
  templateUrl: './registerStudent.component.html',
  styleUrls: ['./registerStudent.component.scss']
})
export default class RegisterStudentComponent implements OnInit{
  toastr: ToastrService;
  hide = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private serviceStudent: EtudiantService,
    private serviseEntreprise: EntreprisesService
  ) {
    
  }
  loginform = new FormGroup({
    nomEtudiant: new FormControl('', [Validators.required, Validators.required]),
    prenomEtudiant: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.required]),
    adresse: new FormControl('', [Validators.required, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.required]),
    competences: new FormControl('', [Validators.required, Validators.required]),
    parcoursAcademique: new FormControl('', [Validators.required, Validators.required]),
    interets: new FormControl('', [Validators.required, Validators.required]),
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
        const student = this.loginform.value as unknown as Etudiant;
        this.serviceStudent.addStudent(student).subscribe((student) => {
            this.toastr.success('register success !')    
            this.router.navigate(['/login']);      
        });
        
      } else {
        this.toastr.error('register failed !')           

      }
  
      
}
}