import { Conges } from './../Conges';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../Service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Conge',
  templateUrl: './Conge.component.html',
  styleUrls: ['./Conge.component.css']
})
export class CongeComponent implements OnInit {
  Congess : Conges[] = [] ;
  
  selectedConges : Conges = {Id : 0 ,Nom:"" , Prenom :"" ,Cin:0,Email:"",DateDebut:"",DateFin:"",Cause:"",TypeConges: "",Available:0}

  constructor(private apiService :ApiService , private http: HttpClient) {
    this.apiService.readConges().subscribe((Congess: Conges[])=>{
      this.Congess= Congess ;
        console.log(this.Congess);
      
      })
   }

  ngOnInit() {
  }


  AccepterConges(form:any){
    form.value.Id = this.selectedConges.Id;
	  form.value.Nom = this.selectedConges.Nom;
	  form.value.Prenom = this.selectedConges.Prenom;
    form.value.Cin=this.selectedConges.Cin;
    form.value.Email =  this.selectedConges.Email;
    form.value.DateDebut = this.selectedConges.DateDebut;
    form.value.DateFin =  this.selectedConges.DateFin;
    form.value.Cause =  this.selectedConges.Cause;
    form.value.TypeConges =  this.selectedConges.TypeConges;


    if(this.selectedConges && this.selectedConges.Id){
      if (confirm("Etes-vous sûr que vous voulez Acceptez Cette demande de  conges ?")){
			this.apiService.AccepterConges(form.value).subscribe((Conges: Conges)=>{
			console.log("Employee updated" , Conges);
			this.apiService.readConges().subscribe((Congess: Conges[])=>{
				this.Congess= Congess;
			})
		});
	}
}
}

  RefuseeConges(form:any){
    form.value.Id = this.selectedConges.Id;
	  form.value.Nom = this.selectedConges.Nom;
	  form.value.Prenom = this.selectedConges.Prenom;
    form.value.Cin=this.selectedConges.Cin;
    form.value.Email =  this.selectedConges.Email;
    form.value.DateDebut = this.selectedConges.DateDebut;
    form.value.DateFin =  this.selectedConges.DateFin;
    form.value.Cause =  this.selectedConges.Cause;
    form.value.TypeConges =  this.selectedConges.TypeConges;


    if(this.selectedConges && this.selectedConges.Id){
      if (confirm("Etes-vous sûr que vous voulez Refuser Cette demande de  conges ?")){
			this.apiService.RefuserConges(form.value).subscribe((Conges: Conges)=>{
			console.log("Employee updated" , Conges);
			this.apiService.readConges().subscribe((Congess: Conges[])=>{
				this.Congess= Congess;
			})
		});
}
}
}

selectConges(Conges: Conges){
	this.selectedConges = Conges;
}

deleteConges(Id:number){

  if(confirm("Etes-vous sûr que vous voulez Refuser Cette demande de  conges ?")){
    this.apiService.deleteConges(Id).subscribe((Conges: Conges)=>{
      console.log("Conges deleted, ", Conges);
      this.apiService.readConges().subscribe((Congess: Conges[])=>{
        this.Congess = Congess;
      })
    });
  }
    
  }
	
}

