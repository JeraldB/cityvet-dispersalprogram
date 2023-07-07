import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: 'admin-tabs',
    component: AdminTabsPage,
    children: [
      {
        path:'admin-dashboard',
        loadChildren: ()=> import('../admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule)
      },
      {
        path:'admin-beneficiary-tabs',
        loadChildren: ()=> import('../admin-beneficiary-tabs/admin-beneficiary-tabs.module').then(m => m.AdminBeneficiaryTabsPageModule)
      },
      {
        path:'admin-livestock-tabs',
        loadChildren: ()=> import('../admin-livestocks-tabs/admin-livestocks-tabs.module').then(m => m.AdminLivestocksTabsPageModule)
      },
      {
        path:'admin-dispersal-tabs',
        loadChildren: ()=> import('../admin-dispersal-tabs/admin-dispersal-tabs.module').then(m => m.AdminDispersalTabsPageModule)
      },

      {
        path: '',
        redirectTo: 'admin-dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'admin-tabs',
    pathMatch:'full'
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('../admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule)
  },
  {
    path: 'admin-beneficiary-tabs',
    loadChildren: () => import('../admin-beneficiary-tabs/admin-beneficiary-tabs.module').then(m => m.AdminBeneficiaryTabsPageModule)
  },
  {
    path: 'admin-livestock-tabs',
    loadChildren: () => import('../admin-livestocks-tabs/admin-livestocks-tabs.module').then(m => m.AdminLivestocksTabsPageModule)
  },
  {
    path: 'admin-dispersal-tabs',
    loadChildren: () => import('../admin-dispersal-tabs/admin-dispersal-tabs.module').then(m => m.AdminDispersalTabsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}
