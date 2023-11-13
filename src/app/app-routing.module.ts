import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    
    
    children: [
      {
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard.component')             
      },   
          
      // default
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component')
      },
      // typographie
      {
        path: 'etudiant',
        loadComponent: () => import('./components/etudiant/etudiants.component')
      },
     {
      path: 'stages',
      loadComponent:() => import('./components/stages/stages.component')
     },
      {
        path: 'entreprises',
        loadComponent: () => import('./components/entreprises/entreprises.component')
      },

      {
        path: 'postulations',
        loadComponent: () => import('./components/postulations/postulations.component')
      },
      {
        path: 'forum',
        loadComponent: () => import('./components/forum/forum.component')
      },

      {
        path:'addstage',
        loadChildren: () => import('./components/addstage/addstage.component')
      },

      {
        path:'stagedetails',
        loadComponent: () => import('./components/stagedetails/stagedetails.component')
        
      },

      {
        path:'addpostulation',
        loadComponent: () => import('./components/addpostulation/addpostulation.component')
        
      }
     
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./components/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
