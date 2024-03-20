import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE_KEY = 'user-role';
const EXTRA_KEY = 'extra';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  stateChanged : boolean = false;
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveUserRole(userRole: any): void {
    window.sessionStorage.removeItem(USER_ROLE_KEY);
    window.sessionStorage.setItem(USER_ROLE_KEY, JSON.stringify(userRole));
    //this.saveExtra(EXTRA_KEY,userRole.toString());
    this.saveExtra(EXTRA_KEY,userRole[0]);
    //this.saveExtra(EXTRA_KEY+'2',userRole.includes('ROLE_COMMERCANT'));
    this.stateChanged=true;
  }

  public saveExtra(KEY : string ,extra: any): void {
    window.sessionStorage.removeItem(KEY);
    window.sessionStorage.setItem(KEY, JSON.stringify(extra));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public getUserRole(): [] {
    const roles = window.sessionStorage.getItem(USER_ROLE_KEY);
    if (roles) {
      return JSON.parse(roles);
    }
    return [];
  }
  public getExtra():string {
    const roles = window.sessionStorage.getItem(EXTRA_KEY);
    if (roles) {
      return roles;
    }
    return "";
  }
}
