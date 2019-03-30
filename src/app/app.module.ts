import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // AngularFirestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
