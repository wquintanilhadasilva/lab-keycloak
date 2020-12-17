import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  data: any = {};

  javadata: any = {};

  constructor(private readonly keycloak: KeycloakService, private http: HttpClient) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }

  public getDataDotNet() {
    this.http.get('https://localhost:5001/weatherforecast').subscribe(d => {this.data = d;});
  }

  public getDataJava() {
    this.http.get('http://localhost:8080/sample/api/values').subscribe(d => {this.javadata = d;});
  }
}
