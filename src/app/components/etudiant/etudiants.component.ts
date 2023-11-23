import { ViewEtudiantComponent } from './etudiantDialogs/view-etudiant/view-etudiant.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from './etudiant';
import { EtudiantService } from './etudiant.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { UpdateEtudiantComponent } from './etudiantDialogs/update-etudiant/update-etudiant.component';
import { AddEtudiantComponent } from './etudiantDialogs/add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from './etudiantDialogs/delete-etudiant/delete-etudiant.component';

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
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export default class EtudiantsComponent implements OnInit {
  displayedColumns: any[] = [ "id", "name", "prenom", "matricule", "competences", "telephone", "email",  "statut", 'actions'];
  dataSource: MatTableDataSource<Etudiant>;
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Etudiant: Etudiant[] = [];

  constructor(public service:EtudiantService, public dialog: MatDialog) {
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

  openDialogAdd(): void {
    this.dialog.open(AddEtudiantComponent, {
      width: '550px',
    }).afterClosed().subscribe((user) => {
      if (user) {
        this.closeDialog(user);
      };
    })
  }

  refresh() {
    this.service.getAllStudents().subscribe(student => {
      this.dataSource = new MatTableDataSource(student)
      this.dataSource.paginator = this.paginator;
    });
  }

  closeDialog(etudiant: Etudiant) {
    this.dataSource.data.push(etudiant);
    this.dataSource.data = [...this.dataSource.data];
  }
  openDialogEdit(row: any) {
    this.dialog.open(UpdateEtudiantComponent, {
      width: '550px',
      data: row
    }).afterClosed().subscribe((etudiant) => {
      if (etudiant) {
        this.closeDialog(etudiant);
        this.refresh()
      };
    })
  }

  openDialogView(row:any): void {
    this.dialog.open(ViewEtudiantComponent, {
      width: '500px',
      data:row
    })
  }

  openDialogDelete(row: any) {
    this.dialog.open(DeleteEtudiantComponent, {
      width: '350px',
      data: row
    }).afterClosed().subscribe((user) => {
      if (user) {
        this.closeDialog(user);
        this.refresh()
      };
    })
  }

  onClickEmail(row) {
    window.open(`mailto:${row.email}`, '_blank');
  }

  
}


