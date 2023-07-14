import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/auth/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'admin-login-page',
    loadChildren: () =>
      import('./pages/auth/admin-login-page/admin-login-page.module').then(
        (m) => m.AdminLoginPagePageModule
      ),
  },

  {
    path: 'livestock',
    loadChildren: () =>
      import('./pages/livestock/livestock.module').then(
        (m) => m.LivestockPageModule
      ),
  },
  {
    path: 'user-tabs',
    loadChildren: () =>
      import('./pages/user-tabs/user-tabs.module').then(
        (m) => m.UserTabsPageModule
      ),
  },
  {
    path: 'admin-tabs',
    loadChildren: () =>
      import('./pages/admin-tabs/admin-tabs.module').then(
        (m) => m.AdminTabsPageModule
      ),
  },
  {
    path: 'admin-dashboards',
    loadChildren: () =>
      import('./pages/admin-dashboards/admin-dashboards.module').then(
        (m) => m.AdminDashboardsPageModule
      ),
  },
  {
    path: 'admin-livestock',
    loadChildren: () =>
      import('./pages/admin-livestock/admin-livestock.module').then(
        (m) => m.AdminLivestockPageModule
      ),
  },
  {
    path: 'admin-beneficiary',
    loadChildren: () =>
      import('./pages/admin-beneficiary/admin-beneficiary.module').then(
        (m) => m.AdminBeneficiaryPageModule
      ),
  },
  {
    path: 'admin-dispersal',
    loadChildren: () =>
      import('./pages/admin-dispersal/admin-dispersal.module').then(
        (m) => m.AdminDispersalPageModule
      ),
  },  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'dispersal',
    loadChildren: () => import('./pages/dispersal/dispersal.module').then( m => m.DispersalPageModule)
  },
  {
    path: 'availment',
    loadChildren: () => import('./pages/availment/availment.module').then( m => m.AvailmentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
