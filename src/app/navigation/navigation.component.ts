import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  
  ngOnInit(): void {
  }

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe((name:any) => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log('loggedin');
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }
  

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = 'home';
  }
}

