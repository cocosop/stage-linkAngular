import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomeComponent } from './theme/layout/home/home.component';
import { AdministratorComponent } from './theme/layout/administrator/administrator.component';
import { authGuardGuard } from './components/guard/auth-guard.guard';
import { ErrorComponent } from './theme/layout/error/error.component';
import { DashboardStudComponent } from './theme/layout/dashboardStudent/dashboardStud.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [authGuardGuard],

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
        loadComponent: () => import('./components/stages/stages.component')
      },
      {
        path: 'entreprises',
        loadComponent: () => import('./components/entreprises/entreprises.component')
      },

      {
        path: 'postulations',
        loadComponent: () => import('./theme/shared/components/postulations/postulations.component')
      },
      {
        path: 'forum',
        loadComponent: () => import('./components/forum/forum.component')
      },

      {
        path: 'addstage',
        loadChildren: () => import('./components/stages/stageDialog/addstage/addstage.component')
      },

      {
        path: 'stagedetails',
        loadComponent: () => import('./components/stagedetails/stagedetails.component')
      },

      {
        path: 'addpostulation/:id',
        loadComponent: () => import('./components/addpostulation/addpostulation.component')
      },
      {
        path: 'viewstage/:id',
        loadComponent: () => import('./theme/shared/components/viewstage/viewstage.component')
      }
    ]
  },
  {
    path: 'studentSpace',
    component: DashboardStudComponent,
    // canActivate: [authGuardGuard],

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
        loadComponent: () => import('./components/stages/stages.component')
      },
      {
        path: 'entreprises',
        loadComponent: () => import('./components/entreprises/entreprises.component')
      },

      {
        path: 'postulations',
        loadComponent: () => import('./theme/shared/components/postulations/postulations.component')
      },
      {
        path: 'forum',
        loadComponent: () => import('./components/forum/forum.component')
      },

      {
        path: 'addstage',
        loadChildren: () => import('./components/stages/stageDialog/addstage/addstage.component')
      },

      {
        path: 'stagedetails',
        loadComponent: () => import('./components/stagedetails/stagedetails.component')
      },

      {
        path: 'addpostulation/:id',
        loadComponent: () => import('./components/addpostulation/addpostulation.component')
      },
      {
        path: 'viewstage/:id',
        loadComponent: () => import('./theme/shared/components/viewstage/viewstage.component')
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },



  {
    path: 'administrator',
    component: AdministratorComponent

  },
  {
    path: '',
    component: GuestComponent,

    children: [
      {
        path: 'guest',
        loadChildren: () => import('./components/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      },
      {
        path: 'login',
        loadComponent: () => import('./components/pages/authentication/login/login.component')
      },
      {
        path: 'signupCompany',
        loadComponent: () => import('./components/pages/authentication/register/register.component')
      },
      {
        path: 'signupStudent',
        loadComponent: () => import('./components/pages/authentication/registerStudent/registerStudent.component')
      }
    ]
  },

  {
    path:'**',
    component:ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
