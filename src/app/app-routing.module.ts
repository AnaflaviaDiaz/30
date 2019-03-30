import { IsLogginGuard } from './guards/is-loggin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IsntLogginGuard } from './guards/isnt-loggin.guard';

const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent, canActivate: [IsntLogginGuard]}
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
