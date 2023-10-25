import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'accueil',
    title: 'Accueil',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashbord',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'stage',
        title: 'Stages',
        type: 'item',
        classes: 'nav-item',
        url: '/stages',
        icon: 'ti ti-notebook'
      },
      {
        id: 'postulation',
        title: 'Postulations',
        type: 'item',
        classes: 'nav-item',
        url: '/postulations',
        icon: 'ti ti-plant-2',
      },
      {
        id: 'Entreprise',
        title: 'Entreprises',
        type: 'item',
        classes: 'nav-item',
        url: '/entreprises',
        icon: "ti ti-building"
      },
      
      {
        id: 'Etudiant',
        title: 'Etudiants',
        type: 'item',
        url: '/etudiant',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'forum',
        title: 'Forum',
        type: 'item',
        classes: 'nav-item',
        url: '/forum',
        icon: 'ti ti-vocabulary',
       
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/guest/login',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
 
 
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
