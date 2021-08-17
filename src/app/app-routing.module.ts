import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { StatsComponent } from './pages/stats/stats.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'contact/:contactId',
    component: ContactDetailsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'edit/:contactId',
    component: ContactEditComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'edit',
    component: ContactEditComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'contact',
    component: ContactAppComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
