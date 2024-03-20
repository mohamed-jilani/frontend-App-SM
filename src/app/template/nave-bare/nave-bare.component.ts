import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nave-bare',
  templateUrl: './nave-bare.component.html',
  styleUrl: './nave-bare.component.css'
})
export class NaveBareComponent implements OnInit {
  title = '';
  private roles: string[] = [];
  isLoggedIn = true;
  userRole?: any;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.userRole = this.roles[0];

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();

    this.router.navigate(['login']);

  }


  getProfile() {
    this.router.navigate(['profile']);
  }


}
