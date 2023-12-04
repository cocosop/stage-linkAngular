import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntreprisesService } from 'src/app/components/entreprises/entreprises.service';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';
import { HomeComponent } from 'src/app/theme/layout/home/home.component';
import { ActivatedRoute } from '@angular/router'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { Etudiant } from 'src/app/components/etudiant/etudiant';
import { Entreprises } from 'src/app/components/entreprises/entreprises';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit{
  toastr: ToastrService;
  constructor(private route:ActivatedRoute, private router: Router,  private builder: FormBuilder, private serviceStudent: EtudiantService,
     private serviseEntreprise: EntreprisesService){
       sessionStorage.clear();

  }
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    motDePasse: new FormControl('', [Validators.required, Validators.required]),

  })
  usertype: string;
  ngOnInit(): void {
    this.usertype = this.route.snapshot.paramMap.get('usertype')
    console.log(this.usertype)
  }

  result: any;
  proceedlogin() {
    if(this.usertype="student"){
      if (this.loginform.status === 'VALID') {
        const student = this.loginform.value as unknown as Etudiant;
        this.serviceStudent.addStudent(student).subscribe((student) => {
          console.log(student)
          if(student.email===this.loginform.value.email){
            if (student.motDePasse=== this.loginform.value.motDePasse) {

              this.router.navigate(['/admin']);

          } else {
            this.toastr.error('Invalid password');
          }
          }

        });
      }
    }else if(this.usertype="admin"){
      if (this.loginform.status === 'VALID') {
        const entreprise = this.loginform.value as unknown as Entreprises;
        this.serviseEntreprise.addEntreprise(entreprise).subscribe((entreprise) => {
          console.log(entreprise)
          if(entreprise.email===this.loginform.value.email){
            if (entreprise.motDePasse=== this.loginform.value.motDePasse) {
              this.router.navigate(['/admin']);

          } else {
            this.toastr.error('Invalid password');
          }
          }

        });
      }
    }
  }
}
