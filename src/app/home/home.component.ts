import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  ValidatePassword() {

    let password = prompt("Veuillez entrer le mot de passe pour continuer", "");
  
    if (password == "NaviTrends2021") {
      alert("Bienvenue");
      return true;
    }
    alert("Merci  de Verifier Votre Mot de Passe");
    return false;
  }

}
