import { Component, OnInit } from '@angular/core';
import { Pointage } from '../Pointage';
import { ApiService } from '../Service/api.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-PointageCOM',
  templateUrl: './PointageCOM.component.html',
  styleUrls: ['./PointageCOM.component.css']
})
export class PointageCOMComponent implements OnInit {
  /*name of the excel-file which will be downloaded. */ 
  fileName= 'PointageCOM.xlsx';  
  pointages: Pointage[] = [];
	selectedPointageCOM: Pointage ={ id : 0 , Nom:"", Prenom:"",Departement:"" , Poste:"", Date:"",HeureEntree:"" , HeureSortie:"", duree : ""}
	constructor(private apiService: ApiService) {
		this.apiService.readPointagesCOM().subscribe((pointages: Pointage[])=>{
		this.pointages = pointages;
		console.log(this.pointages);
	}) }
  
  ngOnInit() {
  }

  createOrUpdatePointageCOM(form:any){
      form.value.id = this.selectedPointageCOM.id;
      form.value.Nom = this.selectedPointageCOM.Nom;
      form.value.Prenom = this.selectedPointageCOM.Prenom;
      form.value.Departement = this.selectedPointageCOM.Departement;
      form.value.Poste = this.selectedPointageCOM.Poste;
      form.value.Date = this.selectedPointageCOM.Date;
      form.value.HeureEntree = this.selectedPointageCOM.HeureEntree;
      form.value.HeureSortie = this.selectedPointageCOM.HeureSortie;
  
      if(this.selectedPointageCOM && this.selectedPointageCOM.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Pointage ?")){
        this.apiService.updatePointageCOM(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage updated" , pointage);
        this.apiService.readPointagesCOM().subscribe((pointages: Pointage[])=>{
          this.pointages= pointages;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Pointage ?")){
      this.apiService.createPointageCOM(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage created, ", pointage);
        this.apiService.readPointagesCOM().subscribe((pointages: Pointage[])=>{
          this.pointages = pointages;
        })
      });
    }
  }
  }

  selectPointageCOM(pointage: Pointage){
    this.selectedPointageCOM = pointage;
  }
  
  deletePointageCOM(id:number){
    this.apiService.deletePointageCOM(id).subscribe((pointage: Pointage)=>{
      console.log("Pointage deleted, ", pointage);
      this.apiService.readPointagesCOM().subscribe((pointages: Pointage[])=>{
        this.pointages = pointages;
      })
    });
  }

  exportexcel(): void 
  {
        
     let element = document.getElementById('PointageCOM'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     XLSX.writeFile(wb, this.fileName);
    
  }

}

