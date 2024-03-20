import {Component, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrl: './side-bare.component.css'
})
export class SideBareComponent {

  showAdmin = false;
  showCommercant: boolean = false;
  showModerator = false;
  showChefUsine = false;
  showChefPose = false;
  showUser = true;

  roles?: String;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}
  onInit(){


    while(this.tokenStorageService.stateChanged){
    this.roles = this.tokenStorageService.getExtra();



    this.showAdmin = this.roles.includes('ROLE_ADMIN');
    this.showModerator = this.roles.includes('ROLE_MODERATOR');
    this.showCommercant = this.roles.includes('ROLE_COMMERCANT');
    this.showChefPose = this.roles.includes('ROLE_CHEFPOSE');
    this.showChefUsine = this.roles.includes('ROLE_CHEFUSINE');

    if(this.showAdmin){
      this.showModerator = false;
      this.showCommercant = false;
      this.showChefPose = false;
      this.showChefUsine = false;
    }
    else if(this.showModerator){
      this.showAdmin = false;
      this.showCommercant = false;
      this.showChefPose = false;
      this.showChefUsine = false;
    }
    else if(this.showCommercant){
      this.showAdmin = false;
      this.showModerator = false;
      this.showChefPose = false;
      this.showChefUsine = false;
    }
    else if(this.showChefPose){
      this.showAdmin = false;
      this.showModerator = false;
      this.showCommercant = false;
      this.showChefUsine = false;
    }
    else if(this.showChefUsine){
      this.showAdmin = false;
      this.showModerator = false;
      this.showChefPose = false;
      this.showCommercant = false;
    }
    }

  }




  getAdminDash() {
    this.router.navigate(['dashboard-admin']);
  }
  getAdminProfile() {
    this.router.navigate(['profile-admin']);
  }



}
