import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../authService/auth-service.service';
import { LoginModel } from './loginModel';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import DialogLoginComponent from './dialogLogin/dialogLogin.component';
import { StagesModel } from 'src/app/components/stages/stages-model';
import { PostulationService } from 'src/app/theme/shared/components/postulations/postulationService';
import { EtudiantModel, Postulation } from 'src/app/theme/shared/components/postulations/postulationModele';
import { StagesService } from 'src/app/components/stages/stages.service';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';
import { Etudiant } from 'src/app/components/etudiant/etudiant';
import { postulationDto } from 'src/app/theme/shared/components/postulations/postulationDto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule,
    ToastrModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule, MatInputModule, FormsModule, MatDialogModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {

  toastr: ToastrService;
  hide = true;
  email: string;
  idStage: string;
  stage: StagesModel;
  result: any;
  postulation: postulationDto;
  etudiant: Etudiant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private authServiceService: AuthServiceService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private postulationService: PostulationService,
    private etudiantService: EtudiantService,
    private stageService: StagesService,
    // @Inject(MAT_DIALOG_DATA) public data: StagesModel

  ) {

  }
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.required])
  });
  usertype: string;
  ngOnInit(): void {
    // this.usertype = this.route.snapshot.paramMap.get('usertype');
    // console.log(this.usertype);
    // localStorage.setItem('usertype', this.usertype);
    this.postulation = {
      idPostulation: 0,
      datePostulation: "",
      statut: "",
      email: "",
      titreStage: ""
    }

  }

  openDialog() {
    this.dialog.open(DialogLoginComponent);
  }

  proceedlogin() {
    if (this.loginform.status === 'VALID') {
      const login = this.loginform.value as unknown as LoginModel;
      this.authServiceService.login(login).subscribe({
        next: (login) => {
          console.log(login)
          if (login.status === 200) {
            if (login.body.roles === "ENTREPRISE") {
              localStorage.setItem('email', login.body.email);
              this.toastrService.success('Login success !');
              this.router.navigate(['/admin']);
            } else {
              if (login.body.roles === "ETUDIANT") {
                localStorage.setItem('email', login.body.email);
                this.router.navigate(['/studentSpace']);
                this.idStage = localStorage.getItem("idStage")
                this.email = localStorage.getItem("email")
                console.log(this.idStage);
                if (this.idStage) {
                  this.etudiantService.getStudentByEmail(this.email).subscribe((res) => {
                    console.log(res);
                    this.postulation.email = res.email
                    this.stageService.getStage(this.idStage).subscribe((resp) => {
                      console.log(resp);
                      this.postulation.titreStage = resp.titreStage;
                      console.log(this.postulation);
                      this.postulationService.addPostulation(this.postulation).subscribe((response) => {
                        console.log(response);
                        this.ngOnInit();
                        this.toastrService.success('Login success !')
                        console.log(login.status);
                      })
                    })
                  })
                }

              } else {
                this.toastrService.error('Login failed !')
              }
            }
          }
        }, error: (error) => {
          console.log(error);
          if (error.status) {
            this.toastrService.error('Bad Credential !');
            //console.log(login.status);
          } else {
            this.toastrService.error('Login failed !');
            //console.log(login.status);
          }
        }
      })
    }
  }

  //   proceedlogin() {   
  //       if (this.loginform.status === 'VALID') {
  //         const login = this.loginform.value as unknown as LoginModel;
  //         this.authServiceService.login(login).subscribe((login) => {   
  //           if(login.status==200){
  //             if(login.body.roles==="ENTREPRISE"){
  //               localStorage.setItem('email', login.body.email); 
  //               this.toastr.success('Login success !')   
  //               this.router.navigate(['/admin']);        
  //             }else{ 
  //                if(login.body.roles==="ETUDIANT"){     
  //               localStorage.setItem('email', login.body.email);  
  //               this.toastr.success('Login success !')        
  //               this.router.navigate(['/studentSpace']);

  //               console.log(login);
  //             }else{
  //               this.toastr.success('Login failed !')   
  //             }                        
  //            }
  //           }
  //           if(login.status===403){
  //             this.toastr.error('Bad Credential !')
  //           }else{
  //             this.toastr.error('Login failed !')
  //           }                       
  //       }
  //        )}
  // }


}