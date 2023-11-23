import { Component, OnInit,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Etudiant } from '../../etudiant';
import { EtudiantService } from '../../etudiant.service';

@Component({
  selector: 'app-delete-etudiant',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule,],
  templateUrl: './delete-etudiant.component.html',
  styleUrl: './delete-etudiant.component.scss'
})
export class DeleteEtudiantComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<Etudiant>,
    private service: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {

  }

  delete() {
    return this.service.deleteStudent(this.data.id).subscribe(teacher => {
      this.ngOnInit();
      this.dialogRef.close(teacher);
    })
  }

}
