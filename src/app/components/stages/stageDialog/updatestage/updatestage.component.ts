import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { StagesModel } from '../../stages-model';
import { StagesService } from '../../stages.service';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-updatestage',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatNativeDateModule,],
  templateUrl: './updatestage.component.html',
  styleUrl: './updatestage.component.scss'
})
export class UpdatestageComponent {
  formUpdate = new FormGroup({
    titreStage: new FormControl('', [Validators.required, Validators.required]),
    localisation: new FormControl('', [Validators.required, Validators.required]),
    description: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;
  formulaireModif: any;

  constructor(
    public dialogRef: MatDialogRef<StagesModel>,
    private service: StagesService,
    @Inject(MAT_DIALOG_DATA) public editData: any,

  ) { }

  hide = true;
  onNoClick(): void {
    this.dialogRef.close();
  }
  id: any;
  ngOnInit(): void {
    if (this.editData) {
      this.formUpdate.controls['titre'].setValue(this.editData.titreStage)
      this.formUpdate.controls['localisation'].setValue(this.editData.localisation)
      this.formUpdate.controls['description'].setValue(this.editData.description)
    }

}

async edit() {
  if (this.formUpdate.status === 'VALID') {
    const stage = this.formUpdate.value as unknown as StagesModel;
    this.service.editStage(this.editData.id, stage).subscribe((stage) => {
      this.dialogRef.close(stage);
      location.assign('/stages');
    });

  }
}

}
