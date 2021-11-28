import { Conges } from './../Conges';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../Service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CongeAcceptee',
  templateUrl: './CongeAcceptee.component.html',
  styleUrls: ['./CongeAcceptee.component.css']
})
export class CongeAccepteeComponent implements OnInit {
  Congess : Conges[] = [] ;
  selectedConges : Conges = {Id : 0 ,Nom:"" , Prenom :"" ,Cin:0,Email:"",DateDebut:"",DateFin:"",Cause:"",TypeConges: "",Available:0}

  constructor(private apiService :ApiService , private http: HttpClient) {
    this.apiService.readCongesAcceptee().subscribe((Congess: Conges[])=>{
      this.Congess= Congess ;
        console.log(this.Congess);
      
      })
   }

  ngOnInit() {
  }

  
  selectConges(Conges: Conges){
    this.selectedConges = Conges;
  }

}
