import { Employee } from './../Employee';
import { Pointage } from './../Pointage';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-Pointage',
  templateUrl: './Pointage.component.html',
  styleUrls: ['./Pointage.component.css']
})
export class PointageComponent implements OnInit {
	
	fileName= 'PointageRh.xlsx';  
  Employees : Employee[] = [];
  pointages: Pointage[] = [];
   
	selectedPointage: Pointage = { id : 0 , Nom:"", Prenom:"",Departement:"" , Poste:"", Date:"",HeureEntree:"" , HeureSortie:"" ,duree:""}
	constructor(private apiService: ApiService){
		this.apiService.readPointages().subscribe((pointages: Pointage[])=>{
		this.pointages = pointages;
		console.log(this.pointages);

		this.apiService.readEmployees().subscribe((Employees: Employee[])=>{
			this.Employees = Employees;
			console.log(this.Employees);
		})

	}) }
	
	ngOnInit()
	{
	}
	createOrUpdatePointage(form:any){


	form.value.id = this.selectedPointage.id;
	form.value.Nom = this.selectedPointage.Nom;
	form.value.Prenom = this.selectedPointage.Prenom;
    form.value.Departement = this.selectedPointage.Departement;
    form.value.Poste = this.selectedPointage.Poste;
    form.value.Date = this.selectedPointage.Date;
    form.value.HeureEntree = this.selectedPointage.HeureEntree;
    form.value.HeureSortie = this.selectedPointage.HeureSortie;
	
	let dateNow:number= new Date().getTime();

	console.log(dateNow);
	console.log(form.value.date);

	
	if(this.selectedPointage && this.selectedPointage.id){
      if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Pointage ?")){
		if (form.value.HeureEntree >= 1 && form.value.HeureSortie <= 24 &&  form.value.HeureEntree < form.value.HeureSortie)
		{
			this.apiService.updatePointage(form.value).subscribe((pointage: Pointage)=>{
			console.log("Pointage updated" , pointage);
			this.apiService.readPointages().subscribe((pointages: Pointage[])=>{
				this.pointages= pointages;
			})
		});
		}else 
		alert('Verifier les heures de Pointage'); 
	}
}
	else{
    if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Pointage ?")){
		if (form.value.HeureEntree >= 1 && form.value.HeureSortie <= 24 &&  form.value.HeureEntree < form.value.HeureSortie  )
		{
		this.apiService.createPointage(form.value).subscribe((pointage: Pointage)=>{
			console.log("Pointage created, ", pointage);
			this.apiService.readPointages().subscribe((pointages: Pointage[])=>{
				this.pointages = pointages;
			})
		});
	} else 
	   alert('Verifier les heures de Pointage'); 
	}
}
}

selectPointage(pointage: Pointage){
	this.selectedPointage = pointage;
}

deletePointage(id:number){
	this.apiService.deletePointage(id).subscribe((pointage: Pointage)=>{
		console.log("Pointage deleted, ", pointage);
		this.apiService.readPointages().subscribe((pointages: Pointage[])=>{
			this.pointages = pointages;
		})
	});
}


	

exportexcel(): void 
    {
          
       let element = document.getElementById('PointageRH'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       XLSX.writeFile(wb, this.fileName);
			
    }



}

