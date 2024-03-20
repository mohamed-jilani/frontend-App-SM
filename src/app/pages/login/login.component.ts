import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  showAdmin = false;
  showCommercant: boolean = false;
  showModerator = false;
  showChefUsine = false;
  showChefPose = false;
  showUser = true;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveUserRole(data.roles);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    const user = this.tokenStorage.getUser();
    this.roles = user.roles;

    this.showAdmin = this.roles.includes('ROLE_ADMIN');
    this.showModerator = this.roles.includes('ROLE_MODERATOR');
    this.showCommercant = this.roles.includes('ROLE_COMMERCANT');
    this.showChefPose = this.roles.includes('ROLE_CHEFPOSE');
    this.showChefUsine = this.roles.includes('ROLE_CHEFUSINE');

    if(this.showAdmin){
      this.router.navigate(['dashboard-admin']);
    }
    else if(this.showCommercant){
      this.router.navigate(['dashboard-commercant']);
    }
    else if(this.showChefPose){
      this.router.navigate(['dashboard-chefPose']);
    }
    else if(this.showChefUsine){
      this.router.navigate(['dashboard-chefUsine']);
    }
    else
    window.location.reload();
  }


  getRegister() {
    this.router.navigate(['register']);
  }
}
