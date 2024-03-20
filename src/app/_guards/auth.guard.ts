import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {TokenStorageService} from "../_services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  title = 'sotebfront';

  isLoggedIn = false;
  roles?: String;

  constructor(private tokenStorageService: TokenStorageService,  private router: Router) { }


  canActivate(): boolean {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.roles = this.tokenStorageService.getExtra();
      alert(this.roles);
    }

    if (this.isLoggedIn) {
      this.router.navigate(['/**']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


}
