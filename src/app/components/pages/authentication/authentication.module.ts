import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule, MatCardModule, MatIconModule]
})
export class AuthenticationModule {}
