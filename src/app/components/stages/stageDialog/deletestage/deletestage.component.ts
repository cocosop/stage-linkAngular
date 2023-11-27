import { StagesService } from './../../stages.service';
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagesModel } from '../../stages-model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deletestage',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  templateUrl: './deletestage.component.html',
  styleUrl: './deletestage.component.scss'
})
export class DeletestageComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<StagesModel>,
    private service: StagesService,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {

  }
  delete() {
    return this.service.deleteStage(this.data.id).subscribe(stage => {
      this.dialogRef.close(stage);
      location.assign('/stages');
    })
  }

}
