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
    // icon: 'icon-navigation',
    children: [
      {
        id: 'home',
        title: 'Home',
        type: 'item',
        classes: 'nav-item',
        url: '/',
        icon: 'ti ti-home',
        breadcrumbs: false
      },
      {
        id: 'dashbord',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/dashboard',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },


      {
        id: 'stages',
        title: 'Interships',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/stages',
        icon: 'ti ti-notebook'
      },
      {
        id: 'postulation',
        title: 'Postulations',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/postulations',
        icon: 'ti ti-plant-2',
      },
      {
        id: 'Entreprise',
        title: 'Companies',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/entreprises',
        icon: "ti ti-building"
      },

      {
        id: 'Etudiant',
        title: 'Students',
        type: 'item',
        url: '/admin/etudiant',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'forum',
        title: 'Forum',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/forum',
        icon: 'ti ti-building',

      }
    ]
  },
   {
    id: 'card',
    title: 'card',
    type: 'groupe',
    icon: 'icon-navigation',
    children: [
      {
        id: 'stagedetails',
        title: 'voir plus...',
        type: 'item',
        url: '/admin/stagedetails',

      },
    ]
  },


];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
