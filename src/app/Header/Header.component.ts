import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  admins : Admin[] = [];
  role : string|null = localStorage.getItem('role');
  name : string|null = localStorage.getItem('token');
  constructor(private router: Router,private dataService:ApiService) {
           
    }

  ngOnInit() {
   
  }


  redirectToHome() {
    this.router.navigateByUrl('dashboard/home');
  }

  logMeOut() {
    this.router.navigateByUrl('login');
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = 'home';
  }
}