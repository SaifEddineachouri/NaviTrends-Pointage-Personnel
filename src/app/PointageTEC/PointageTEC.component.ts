import { Pointage } from './../Pointage';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-PointageTEC',
  templateUrl: './PointageTEC.component.html',
  styleUrls: ['./PointageTEC.component.css']
})
export class PointageTECComponent implements OnInit {
  /*name of the excel-file which will be downloaded. */ 
  fileName= 'PointageTEC.xlsx'; 
  
  pointages: Pointage[] = [];
	selectedPointageTEC: Pointage = { id : 0 , Nom:"", Prenom:"",Departement:"" , Poste:"", Date:"",HeureEntree:"" , HeureSortie:"", duree : ""}
	constructor(private apiService: ApiService) {
		this.apiService.readPointagesTEC().subscribe((pointages: Pointage[])=>{
		this.pointages = pointages;
		console.log(this.pointages);
	}) }
  ngOnInit() {
  }

  createOrUpdatePointageTEC(form:any){
      form.value.id = this.selectedPointageTEC.id;
      form.value.Nom = this.selectedPointageTEC.Nom;
      form.value.Prenom = this.selectedPointageTEC.Prenom;
      form.value.Departement = this.selectedPointageTEC.Departement;
      form.value.Poste = this.selectedPointageTEC.Poste;
      form.value.Date = this.selectedPointageTEC.Date;
      form.value.HeureEntree = this.selectedPointageTEC.HeureEntree;
      form.value.HeureSortie = this.selectedPointageTEC.HeureSortie;
  
      if(this.selectedPointageTEC && this.selectedPointageTEC.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Pointage ?")){
        this.apiService.updatePointageTEC(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage updated" , pointage);
        this.apiService.readPointagesTEC().subscribe((pointages: Pointage[])=>{
          this.pointages= pointages;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Pointage ?")){
      this.apiService.createPointageTEC(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage created, ", pointage);
        this.apiService.readPointagesTEC().subscribe((pointages: Pointage[])=>{
          this.pointages = pointages;
        })
      });
    }
  }
  }

  selectPointageTEC(pointage: Pointage){
    this.selectedPointageTEC = pointage;
  }
  
  deletePointageTEC(id:number){
    this.apiService.deletePointageTEC(id).subscribe((pointage: Pointage)=>{
      console.log("Pointage deleted, ", pointage);
      this.apiService.readPointagesTEC().subscribe((pointages: Pointage[])=>{
        this.pointages = pointages;
      })
    });
  }

  exportexcel(): void 
  {
        
     let element = document.getElementById('PointageTEC'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     XLSX.writeFile(wb, this.fileName);
    
  }
}

