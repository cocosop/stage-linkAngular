import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entreprises } from '../../entreprises';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EtudiantService } from 'src/app/components/etudiant/etudiant.service';
import { EntreprisesService } from '../../entreprises.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-deletentreprise',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  templateUrl: './deletentreprise.component.html',
  styleUrl: './deletentreprise.component.scss'
})
export class DeletentrepriseComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<Entreprises>,
    private service: EntreprisesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    
  }

  delete() {
    return this.service.deleteEntreprise(this.data.id).subscribe(teacher => {
      this.ngOnInit();
      this.dialogRef.close(teacher);
    })
  }
}
