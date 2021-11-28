import { Employee } from './../Employee';
import { ApiService } from './../Service/api.service';
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-Employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {
	
	myFiles:string [] = [];
  
	ngForm = new FormGroup({
	 file: new FormControl('', [Validators.required])
   });

 Employees : Employee[] = [] ;
 selectedEmployee : Employee = {Id : 0 ,Nom:"" , Prenom :"" , DateNaissance:"" , Cin:0,Ncnss:0,DateEmbauche:"",Salaire:0,Regime:"",Fichier: "",Commentaire :""}
  constructor(private apiService :ApiService , private http: HttpClient) {
    this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
    this.Employees = Employees ;
      console.log(this.Employees);
    })
   }

 



	createOrUpdateEmployee(form:any){
	form.value.Id = this.selectedEmployee.Id;
	form.value.nom = this.selectedEmployee.Nom;
	form.value.prenom = this.selectedEmployee.Prenom;
    form.value.dateNaissance = this.selectedEmployee.DateNaissance;
    form.value.Cin = this.selectedEmployee.Cin;
    form.value.ncnss = this.selectedEmployee.Ncnss;
    form.value.dateEmbauche = this.selectedEmployee.DateEmbauche;
    form.value.salaire = this.selectedEmployee.Salaire;
    form.value.fichier = this.selectedEmployee.Fichier;
	form.value.Regime = this.selectedEmployee.Regime;
    form.value.commentaire = this.selectedEmployee.Commentaire;


		if(this.selectedEmployee && this.selectedEmployee.Id){
      if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Employee ?")){
			this.apiService.updateEmployee(form.value).subscribe((Employee: Employee)=>{
			console.log("Employee updated" , Employee);
			this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
				this.Employees= Employees;
			})
		});
	}
}
	else{
    if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Employee ?")){
		this.apiService.createEmployee(form.value).subscribe((Employee: Employee)=>{
			console.log("Employee created", Employee);
			this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
				this.Employees = Employees;
			})
		});
	}
}
}

selectEmployee(Employee: Employee){
	this.selectedEmployee = Employee;
}

deleteEmployee(Id:number){
	this.apiService.deleteEmployee(Id).subscribe((Employee: Employee)=>{
		console.log("Employee deleted, ", Employee);
		this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
			this.Employees = Employees;
		})
	});
}


  ngOnInit() {
	
  }

	 
 get f(){
   return this.ngForm.controls;
 }
	
 onFileChange(event:any) {
  
	   for (var i = 0; i < event.target.files.length; i++) { 
		   this.myFiles.push(event.target.files[i]);
	   }
 }
	 
 submit(){
   const formData = new FormData();

   for (var i = 0; i < this.myFiles.length; i++) { 
	 formData.append("file[]", this.myFiles[i]);
   }
 
   this.http.post('http://localhost:8040/NaviTrends/src/php/Employee/upload.php', formData)
	 .subscribe(res => {
	   console.log(res);
	   alert('Uploaded Successfully.');
	 })
 }
}

