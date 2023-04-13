import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { materialize } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './core/navigation/navbar/navbar.component';
import { HomepageComponent } from './users/homepage/homepage.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './security/components/login/login.component';
import { LogoutComponent } from './security/components/logout/logout.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
