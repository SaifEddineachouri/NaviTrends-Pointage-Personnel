import { Employee } from './../Employee';
import { Conges } from './../Conges';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-CongesApplication',
  templateUrl: './CongesApplication.component.html',
  styleUrls: ['./CongesApplication.component.css']
})
export class CongesApplicationComponent implements OnInit {
  Congess : Conges[] = [] ;
  Employees : Employee[] = [];
  selectedConges : Conges = {Id : 0 ,Nom:"" , Prenom :"" ,Cin:0,Email:"",DateDebut:"",DateFin:"",Cause:"",TypeConges: "",Available:0}

  constructor(private apiService :ApiService , private http: HttpClient) {
    this.apiService.readConges().subscribe((Congess: Conges[])=>{
      this.Congess= Congess ;
        console.log(this.Congess);
      
      })

      this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
        this.Employees = Employees;
        console.log(this.Employees);
      })
   }

  ngOnInit() {
  }

  createOrUpdateConges(form:any){
    form.value.Id = this.selectedConges.Id
	  form.value.Nom = this.selectedConges.Nom;
	  form.value.Prenom = this.selectedConges.Prenom;
    form.value.Cin=this.selectedConges.Cin;
    form.value.Email =  this.selectedConges.Email;
    form.value.DateDebut = this.selectedConges.DateDebut;
    form.value.DateFin =  this.selectedConges.DateFin;
    form.value.Cause =  this.selectedConges.Cause;
    form.value.TypeConges =  this.selectedConges.TypeConges;

    
    for (let index = 0; index < this.Employees.length; index++) {
      if(form.value.Nom== this.Employees[index].Nom && form.value.Prenom == this.Employees[index].Prenom && form.value.Cin == this.Employees[index].Cin){
        if (confirm("Etes-vous sûr que vous voulez Envoyez cette demande de Conges ?")){
          this.apiService.createConges(form.value).subscribe((Conges: Conges)=>{
            console.log("Conges created", Conges);
            alert("votre demande a ete enregistre avec success");
          });
        }
      }else{
        alert("Impossible D'ajouter Cette Demande, Employee N'existe Pas !");
      }
      
    }
    
  }

}
