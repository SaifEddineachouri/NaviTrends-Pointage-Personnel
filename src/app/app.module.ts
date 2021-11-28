import { NgModule } from '@angular/core';
import { CongeRefuseeComponent } from './CongeRefusee/CongeRefusee.component';
import { CongeAccepteeComponent } from './CongeAcceptee/CongeAcceptee.component';
import { CongeComponent } from './Conge/Conge.component';
import { CongesApplicationComponent } from './CongesApplication/CongesApplication.component';
import { FichePaieComponent } from './FichePaie/FichePaie.component';
import { CherchePointageComponent } from './CherchePointage/CherchePointage.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { PointageCOMComponent } from './PointageCOM/PointageCOM.component';
import { PointageTECComponent } from './PointageTEC/PointageTEC.component';
import { PointageLOGComponent } from './PointageLOG/PointageLOG.component';
import { PointageADComponent } from './PointageAD/PointageAD.component';
import { PointageComponent } from './Pointage/Pointage.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [																						
    AppComponent,
      LoginComponent,
      RegisterComponent,
      DashboardComponent,
      HomeComponent,
      HeaderComponent,
      PointageComponent,
      PointageADComponent,
      PointageLOGComponent,
      PointageTECComponent,
      PointageCOMComponent,
      EmployeeComponent,
      CherchePointageComponent,
      FichePaieComponent,
      CongesApplicationComponent,
      CongeComponent,
      CongeAccepteeComponent,
      CongeRefuseeComponent,
      NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
