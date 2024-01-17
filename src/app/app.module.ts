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
import { HomeComponent } from './theme/layout/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Route} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import StagesComponent from './components/stages/stages.component';
import PostulationsComponent from './theme/shared/components/postulations/postulations.component';
import AddstageComponent from './components/stages/stageDialog/addstage/addstage.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AdministratorComponent } from './theme/layout/administrator/administrator.component';
import { NavHomeComponent } from './theme/layout/admin/nav-bar/nav-home/nav-home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule} from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { DashboardStudComponent } from './theme/layout/dashboardStudent/dashboardStud.component';
import ViewstageComponent from './theme/shared/components/viewstage/viewstage.component';
import { MatListModule } from '@angular/material/list';
import { ViewEtudiantModule } from './theme/shared/components/view-etudiant/viewEtudiantModule';
import { ViewstageModule } from './theme/shared/components/viewstage/viewStageModule';
import { PostulationModule } from './theme/shared/components/postulations/postulationModule';
import { ViewentrepriseModule } from './theme/shared/components/viewentreprise/viewentrepriseModule';
import { ViewstageEntrepriseModule } from './theme/shared/components/viewstageEntreprises/viewStageModule';
import { CandidaturesModule } from './theme/shared/components/candidatures/candidaturesModule';






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
    NavHomeComponent,
    DashboardStudComponent,
   

    
    

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
          AddstageComponent,
          MatButtonToggleModule,
          MatPaginatorModule,
          MatListModule,
          ViewstageModule,
          ViewentrepriseModule,
          ViewstageEntrepriseModule,
          PostulationModule,
          CandidaturesModule,
          BrowserAnimationsModule,
  	      ToastrModule.forRoot()
         

        ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule {}
