import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from '../../etudiant';
import EtudiantsComponent from '../../etudiants.component';
import { EtudiantService } from '../../etudiant.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-view-etudiant',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatCardModule, MatListModule],
  templateUrl: './view-etudiant.component.html',
  styleUrl: './view-etudiant.component.scss'
})
export class ViewEtudiantComponent {
  etudiant!: Etudiant;

  constructor(
    public dialogRef: MatDialogRef<EtudiantsComponent>,
    private service: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.service.getStudent(this.data.id).subscribe((etudiant) => (this.etudiant = etudiant));
  }
}
