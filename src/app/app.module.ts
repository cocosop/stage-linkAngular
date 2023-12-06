import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HttpClientModule } from '@angular/common/http';
import StagedetailsComponent from './components/stagedetails/stagedetails.component';
import { HomeComponent } from './theme/layout/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterModule, Route} from '@angular/router';
import LoginComponent from './components/pages/authentication/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import StagesComponent from './components/stages/stages.component';
import PostulationsComponent from './components/postulations/postulations.component';
import AddstageComponent from './components/stages/stageDialog/addstage/addstage.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AdministratorComponent } from './theme/layout/administrator/administrator.component';
import { NavHomeComponent } from './theme/layout/admin/nav-bar/nav-home/nav-home.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    ConfigurationComponent,
    GuestComponent,
    HomeComponent,
    AdministratorComponent,
    NavHomeComponent

  ],
imports: [BrowserModule,
          AppRoutingModule,
          SharedModule,
          BrowserAnimationsModule,
          HttpClientModule,
          MatCardModule,
          MatButtonModule,
          MatIconModule,
          MatMenuModule,
          MatDialogModule,
          RouterModule,
          MatRippleModule,
          MatTabsModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          StagesComponent,
          PostulationsComponent,
          AddstageComponent

        ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule {}
