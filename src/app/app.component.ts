import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success
    )
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.isLoggedIn = !this.isLoggedIn;
  }

}
