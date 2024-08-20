import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';
import { LandingScreenComponent } from './pages/landing-screen/landing-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    RegisterScreenComponent,
    LandingScreenComponent,
    LoginScreenComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppModule,
    FormsModule,
  ],
  providers:[provideClientHydration()],
  bootstrap:[AppModule]
})
export class AppModule { }
