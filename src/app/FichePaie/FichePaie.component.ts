import { Pointage } from './../Pointage';
import { ApiService } from './../Service/api.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ViewChild,  ElementRef} from '@angular/core';
import { jsPDF } from 'jspdf';
import { Employee } from './../Employee';


@Component({
  selector: 'app-FichePaie',
  templateUrl: './FichePaie.component.html',
  styleUrls: ['./FichePaie.component.css']
})
export class FichePaieComponent implements OnInit {


  @ViewChild('content',{static:false}) el!:ElementRef;

  Nom :string='';
  Prenom :string = '';
  DateNaiss : string = '';
  Cin:number = 0;
  Cnss : number = 0 ;
  Poste : string = '' ;
  Entreprise : string = '' ;
  Date : string = '';
  SalaireBrut : number = 0;
  SalaireNet : number =0 ;
  RetenueCnsss:number = 0;
  SalaireImposable : number = 0;
  RegimeEmp : number = 0 ;
  PrixHeure : number = 0 ;
  SalaireMois : number = 0 ;
  SalaireAnnuel : number = 0;
  SalaireAvecImpot : number = 0;
  Pointages : Pointage[] = [];
  Employees : Employee[] = [];
  numberOfDayPerMonth : number = 0 ; 



  constructor(private apiService :ApiService) { 
    /*this.apiService.cherchePointage().subscribe((Pointages: Pointage[])=>{
      this.Pointages = Pointages ;
        console.log(this.Pointages);
      })*/
      
  }
  ngOnInit(): void { }

  cherchePointages(nom : string , prenom : string , Date : string){
      let formdata = new FormData() ;
      formdata.append('nom',  nom );
      formdata.append('prenom', prenom );
      formdata.append('date', Date );
      
   this.apiService.cherchePointage(formdata).subscribe((Pointages: Pointage[])=>{
   this.Pointages = Pointages ;
   this.numberOfDayPerMonth = Math.floor(parseInt(this.Pointages[0].duree) / 8) ; 
   console.log(this.Pointages) ; 


   this.apiService.readEmployees().subscribe((Employees : Employee[])=>{
     this.Employees = Employees ;
     console.log(this.Employees);
})

   


   for (let index = 0; index < this.Employees.length; index++) {

          if (this.Employees[index].Nom == this.Pointages[0].Nom && this.Employees[index].Prenom == this.Pointages[0].Prenom) {
                let  i = index ;

                this.Nom = this.Employees[i].Nom;
                this.Prenom =  this.Employees[i].Prenom;
                this.Cin = this.Employees[i].Cin;
                this.Cnss = this.Employees[i].Ncnss;
                this.DateNaiss = this.Employees[i].DateNaissance;
                this.Poste= this.Pointages[0].Poste;
                this.SalaireNet = 0;
                this.Entreprise= 'NaviTrends';
                this.Date= Date.toString();
                
                this.RetenueCnsss = Math.round(((this.SalaireMois * 9.18 )/100)*100)/100;
                this.SalaireImposable = Math.round((this.SalaireMois - this.RetenueCnsss)*100)/100 ;
                this.RegimeEmp = parseInt(this.Employees[i].Regime );
                this.PrixHeure = Math.round((this.Employees[i].Salaire /(this.RegimeEmp*4.3 ))*100) /100;
                this.SalaireMois = Math.round((parseInt(this.Pointages[0].duree)* this.PrixHeure)*100)/100 ;
                this.SalaireAnnuel = Math.round((this.SalaireMois * 12)*100)/100 ;
                this.SalaireBrut = this.SalaireMois;


                
                if(this.SalaireAnnuel>0 && this.SalaireAnnuel <= 5000 ) {
                    this.SalaireAvecImpot = this.SalaireAnnuel ;
                }else if(this.SalaireAnnuel>=5001 && this.SalaireAnnuel<= 20000){
                  this.SalaireAvecImpot = Math.round((this.SalaireAnnuel-((this.SalaireAnnuel - 5000 )*(26/100)))*100)/100;
                }else if(this.SalaireAnnuel>=20001 && this.SalaireAnnuel<=30000){
                  this.SalaireAvecImpot = Math.round((this.SalaireAnnuel-((this.SalaireAnnuel-5000)*(28/100)))*100)/100;
                }else if(this.SalaireAnnuel>=30001 && this.SalaireAnnuel<=50000){
                  this.SalaireAvecImpot = Math.round((this.SalaireAnnuel-((this.SalaireAnnuel-5000)*(32/100)))*100)/100;
                }else if(this.SalaireAnnuel> 50000){
                  this.SalaireAvecImpot = Math.round((this.SalaireAnnuel -((this.SalaireAnnuel-5000)*(35/100)))*100)/100;
                }
                  
          }

   }


})}

makePdf(){
  let pdf = new jsPDF('p','pt','a1');
  pdf.text("Fiche Employee",10,10);
  pdf.html(this.el.nativeElement,{
    callback : (pdf)=>{
      pdf.save("FichEmployee.pdf");
    }
  });
}

}
