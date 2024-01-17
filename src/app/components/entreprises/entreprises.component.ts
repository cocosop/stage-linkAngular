import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddEtudiantComponent } from '../etudiant/etudiantDialogs/add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from '../etudiant/etudiantDialogs/delete-etudiant/delete-etudiant.component';
import { UpdateEtudiantComponent } from '../etudiant/etudiantDialogs/update-etudiant/update-etudiant.component';
import { ViewEtudiantComponent } from '../../theme/shared/components/view-etudiant/view-etudiant.component';
import { Entreprises } from './entreprises';
import { EntreprisesService } from './entreprises.service';
import AddentrepriseComponent from './entrepriseDialog/addentreprise/addentreprise.component';
import { DeletentrepriseComponent } from './entrepriseDialog/deletentreprise/deletentreprise.component';
import { UpdatentrepriseComponent } from './entrepriseDialog/updatentreprise/updatentreprise.component';
import { ViewentrepriseComponent } from '../../theme/shared/components/viewentreprise/viewentreprise.component';

@Component({
  selector: 'app-entreprises',
  standalone: true,
  imports: [
    CommonModule,

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
    MatDialogClose,],
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export default class EntreprisesComponent implements OnInit{
  displayedColumns: any[] = [ "id", "nomEntreprise", "responsable", "telephone", "email", "adresse", "stage","statut","dateInscription", 'actions'];
  dataSource: MatTableDataSource<Entreprises>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  entreprise: Entreprises[] = [];

  constructor(public service:EntreprisesService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Entreprises>([]);

  }

  ngOnInit(): void {
    this.service.getAllEntreprises().subscribe(entreprise => {
      this.dataSource = new MatTableDataSource(entreprise)
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
    this.dialog.open(AddentrepriseComponent, {
      width: '550px',
    }).afterClosed().subscribe((user) => {
      if (user) {
        this.closeDialog(user);
      };
    })
  }

  refresh() {
    this.service.getAllEntreprises().subscribe(student => {
      this.dataSource = new MatTableDataSource(student)
      this.dataSource.paginator = this.paginator;
    });
  }

  closeDialog(entreprise: Entreprises) {
    this.dataSource.data.push(entreprise);
    this.dataSource.data = [...this.dataSource.data];
  }
  openDialogEdit(row: any) {
    this.dialog.open(UpdatentrepriseComponent, {
      width: '550px',
      data: row
    }).afterClosed().subscribe((entreprise) => {
      if (entreprise) {
        this.closeDialog(entreprise);
        this.refresh()
      };
    })
  }

  openDialogView(row:any): void {
    this.dialog.open(ViewentrepriseComponent, {
      width: '500px',
      data:row
    })
  }

  openDialogDelete(row: any) {
    this.dialog.open(DeletentrepriseComponent, {
      width: '350px',
      data: row
    }).afterClosed().subscribe((entreprise) => {
      if (entreprise) {
        this.closeDialog(entreprise);
        this.refresh()
      };
    })
  }

  onClickEmail(row) {
    window.open(`mailto:${row.email}`, '_blank');
  }

}
