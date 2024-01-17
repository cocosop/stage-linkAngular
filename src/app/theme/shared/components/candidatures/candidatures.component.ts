import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Candidature } from './candidaturesModele';
import { CandidatureService } from './candidaturesService';


@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.scss']
})
export default class CandidaturesComponent implements OnInit{
  displayedColumns: any[] = ["datePostulation", "titreStage", "statut"];
  dataSource: MatTableDataSource<Candidature>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  email: string;
  postulation: Candidature[] = [];

  constructor(public service:CandidatureService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Candidature>([]);

  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.service.getPostulationByEmail(this.email).subscribe(resp => {
      console.log(resp)
      this.dataSource = new MatTableDataSource(resp);
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
  
  // openDialogAdd(): void {
  //   this.dialog.open(AddEtudiantComponent, {
  //     width: '550px',
  //   }).afterClosed().subscribe((user) => {
  //     if (user) {
  //       this.closeDialog(user);
  //     };
  //   })
  // }

  // refresh() {
  //   this.service.getAllStudents().subscribe(student => {
  //     this.dataSource = new MatTableDataSource(student)
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }

  // closeDialog(etudiant: Etudiant) {
  //   this.dataSource.data.push(etudiant);
  //   this.dataSource.data = [...this.dataSource.data];
  // }
  // openDialogEdit(row: any) {
  //   this.dialog.open(UpdateEtudiantComponent, {
  //     width: '550px',
  //     data: row
  //   }).afterClosed().subscribe((etudiant) => {
  //     if (etudiant) {
  //       this.closeDialog(etudiant);
  //       this.refresh()
  //     };
  //   })
  // }

  // openDialogView(row:any): void {
  //   this.dialog.open(ViewEtudiantComponent, {
  //     width: '500px',
  //     data:row
  //   })
  // }

  

  onClickEmail(row) {
    window.open(`mailto:${row.email}`, '_blank');
  }

}

  


 

 









