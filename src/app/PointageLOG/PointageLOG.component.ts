import { Component, OnInit } from '@angular/core';
import { Pointage } from '../Pointage';
import { ApiService } from '../Service/api.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-PointageLOG',
  templateUrl: './PointageLOG.component.html',
  styleUrls: ['./PointageLOG.component.css']
})
export class PointageLOGComponent implements OnInit {
  /*name of the excel-file which will be downloaded. */ 
  fileName= 'PointageLOG.xlsx'; 
 
  pointages: Pointage[] = [];
	selectedPointageLOG: Pointage = { id : 0 , Nom:"", Prenom:"",Departement:"" , Poste:"", Date:"",HeureEntree:"" , HeureSortie:"", duree : ""}
	constructor(private apiService: ApiService) {
		this.apiService.readPointagesLOG().subscribe((pointages: Pointage[])=>{
		this.pointages = pointages;
		console.log(this.pointages);
	}) }
  ngOnInit() {
  }

  createOrUpdatePointageLOG(form:any){
      form.value.id = this.selectedPointageLOG.id;
      form.value.Nom = this.selectedPointageLOG.Nom;
      form.value.Prenom = this.selectedPointageLOG.Prenom;
      form.value.Departement = this.selectedPointageLOG.Departement;
      form.value.Poste = this.selectedPointageLOG.Poste;
      form.value.Date = this.selectedPointageLOG.Date;
      form.value.HeureEntree = this.selectedPointageLOG.HeureEntree;
      form.value.HeureSortie = this.selectedPointageLOG.HeureSortie;
  
      if(this.selectedPointageLOG && this.selectedPointageLOG.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Pointage ?")){
        this.apiService.updatePointageLOG(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage updated" , pointage);
        this.apiService.readPointagesLOG().subscribe((pointages: Pointage[])=>{
          this.pointages= pointages;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Pointage ?")){
      this.apiService.createPointageLOG(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage created, ", pointage);
        this.apiService.readPointagesLOG().subscribe((pointages: Pointage[])=>{
          this.pointages = pointages;
        })
      });
    }
  }
  }

  selectPointageLOG(pointage: Pointage){
    this.selectedPointageLOG = pointage;
  }
  
  deletePointageLOG(id:number){
    this.apiService.deletePointageLOG(id).subscribe((pointage: Pointage)=>{
      console.log("Pointage deleted, ", pointage);
      this.apiService.readPointagesLOG().subscribe((pointages: Pointage[])=>{
        this.pointages = pointages;
      })
    });
  }

  exportexcel(): void 
  {
        
     let element = document.getElementById('PointageLOG'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     XLSX.writeFile(wb, this.fileName);
    
  }
}

