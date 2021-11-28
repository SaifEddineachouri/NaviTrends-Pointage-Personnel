import { LoginComponent } from './Login/Login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/Register.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { PointageComponent } from './Pointage/Pointage.component';
import { AuthguardGuard } from './authguard.guard';
import { PointageADComponent } from './PointageAD/PointageAD.component';
import { PointageLOGComponent} from './PointageLOG/PointageLOG.component';
import { PointageTECComponent} from './PointageTEC/PointageTEC.component';
import { PointageCOMComponent } from './PointageCOM/PointageCOM.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { CherchePointageComponent } from './CherchePointage/CherchePointage.component';
import { FichePaieComponent } from './FichePaie/FichePaie.component';
import { CongesApplicationComponent } from './CongesApplication/CongesApplication.component';
import { CongeComponent } from './Conge/Conge.component';
import { CongeAccepteeComponent } from './CongeAcceptee/CongeAcceptee.component';
import {CongeRefuseeComponent} from './CongeRefusee/CongeRefusee.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'PointageRH', component: PointageComponent },
{ path: 'PointageAD' , component : PointageADComponent},
{ path: 'PointageLOG' , component : PointageLOGComponent},
{ path: 'PointageTEC' , component : PointageTECComponent},
{ path: 'PointageCOM' ,component: PointageCOMComponent},
{ path: 'Employee' , component : EmployeeComponent},
{ path: 'HeureTravaille',component :CherchePointageComponent},
{ path: 'FichePaie' , component : FichePaieComponent},
{ path : 'DemandeConges' , component: CongesApplicationComponent},
{ path: 'Conge' , component:CongeComponent},
{ path: 'CongeAcceptée' ,  component:CongeAccepteeComponent },
{ path: 'CongeRefusée' , component:CongeRefuseeComponent},
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }