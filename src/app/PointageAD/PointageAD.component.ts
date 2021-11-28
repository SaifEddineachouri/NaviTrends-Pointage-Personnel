import { Pointage } from './../Pointage';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-PointageAD',
  templateUrl: './PointageAD.component.html',
  styleUrls: ['./PointageAD.component.css']
})
export class PointageADComponent implements OnInit {
  /*name of the excel-file which will be downloaded. */ 
  fileName= 'PointageAD.xlsx';  
  pointages: Pointage[] = [];
	selectedPointageAD: Pointage = { id : 0 , Nom:"", Prenom:"",Departement:"" , Poste:"", Date:"",HeureEntree:"" , HeureSortie:"",duree : ""}
	constructor(private apiService: ApiService) {
		this.apiService.readPointagesAD().subscribe((pointages: Pointage[])=>{
		this.pointages = pointages;
		console.log(this.pointages);
	}) }
  ngOnInit() {
  }

  createOrUpdatePointageAD(form:any){
      form.value.id = this.selectedPointageAD.id;
      form.value.Nom = this.selectedPointageAD.Nom;
      form.value.Prenom = this.selectedPointageAD.Prenom;
      form.value.Departement = this.selectedPointageAD.Departement;
      form.value.Poste = this.selectedPointageAD.Poste;
      form.value.Date = this.selectedPointageAD.Date;
      form.value.HeureEntree = this.selectedPointageAD.HeureEntree;
      form.value.HeureSortie = this.selectedPointageAD.HeureSortie;
  
      if(this.selectedPointageAD && this.selectedPointageAD.id){
        if (confirm("Etes-vous sûr que vous voulez Modifier  Ce Pointage ?")){
        this.apiService.updatePointageAD(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage updated" , pointage);
        this.apiService.readPointagesAD().subscribe((pointages: Pointage[])=>{
          this.pointages= pointages;
        })
      });
    }
  }
    else{
      if (confirm("Etes-vous sûr que vous voulez Ajouter  Ce Pointage ?")){
      this.apiService.createPointageAD(form.value).subscribe((pointage: Pointage)=>{
        console.log("Pointage created, ", pointage);
        this.apiService.readPointagesAD().subscribe((pointages: Pointage[])=>{
          this.pointages = pointages;
        })
      });
    }
  }
  }

  selectPointageAD(pointage: Pointage){
    this.selectedPointageAD = pointage;
  }
  
  deletePointageAD(id:number){
    this.apiService.deletePointageAD(id).subscribe((pointage: Pointage)=>{
      console.log("Pointage deleted, ", pointage);
      this.apiService.readPointagesAD().subscribe((pointages: Pointage[])=>{
        this.pointages = pointages;
      })
    });
  }

  exportexcel(): void 
    {
          
       let element = document.getElementById('PointageAD'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       XLSX.writeFile(wb, this.fileName);
			
    }
}

