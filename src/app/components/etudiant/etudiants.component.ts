import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from './etudiant';
import { EtudiantService } from './etudiant.service';




@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export default class EtudiantsComponent implements OnInit {
  displayedColumns: string[] = [ "id", "name", "prenom", "matricule", "competences", "telephone", "email", "motDePasse", "statut", 'actions'];
  dataSource: MatTableDataSource<Etudiant>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Etudiant: Etudiant[] = [];

  constructor(public service:EtudiantService) {
    this.dataSource = new MatTableDataSource<Etudiant>([]);

  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource(students)
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
