import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    children: [
      {
        path:'admin-dashboards',
        loadChildren : ()=> import('../admin-dashboards/admin-dashboards.module').then(m => m.AdminDashboardsPageModule)
      },
      {
        path:'admin-beneficiary',
        loadChildren : () => import('../admin-beneficiary/admin-beneficiary.module').then(m => m.AdminBeneficiaryPageModule)
      },
      {
        path:'admin-livestock',
        loadChildren : () => import('../admin-livestock/admin-livestock.module').then(m => m.AdminLivestockPageModule)
      },
      {
        path:'admin-dispersal',
        loadChildren : () => import('../admin-dispersal/admin-dispersal.module').then(m => m.AdminDispersalPageModule)
      },
      {
        path: '',
        redirectTo: 'admin-tabs',
        pathMatch: 'full'
      }
    ]
  },

  {
    path : '',
    redirectTo: 'admin-tabs',
    pathMatch : 'full'
  },
  {
    path:'admin-dashboards',
    loadChildren: () => import('../admin-dashboards/admin-dashboards.module').then(m =>m.AdminDashboardsPageModule)
  },
  {
    path:'admin-beneficiary',
    loadChildren: () => import('../admin-beneficiary/admin-beneficiary.module').then(m =>m.AdminBeneficiaryPageModule)
  },
  {
    path:'admin-livestock',
    loadChildren: () => import('../admin-livestock/admin-livestock.module').then(m =>m.AdminLivestockPageModule)
  },
  {
    path:'admin-dispersal',
    loadChildren: () => import('../admin-dispersal/admin-dispersal.module').then(m =>m.AdminDispersalPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}
