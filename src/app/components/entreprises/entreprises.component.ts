import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-entreprises',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export default class EntreprisesComponent {}
