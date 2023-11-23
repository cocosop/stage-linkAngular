import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entreprises } from '../../entreprises';
import EntreprisesComponent from '../../entreprises.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EntreprisesService } from '../../entreprises.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-viewentreprise',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatButtonModule,MatIconModule,MatCardModule,MatListModule],
  templateUrl: './viewentreprise.component.html',
  styleUrl: './viewentreprise.component.scss'
})
export class ViewentrepriseComponent implements OnInit{
  entreprise!: Entreprises;

  constructor(
    public dialogRef: MatDialogRef<EntreprisesComponent>,
    private service: EntreprisesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    this.service.getEntreprise(this.data.id).subscribe(entreprise => this.entreprise = entreprise)
  }


}
