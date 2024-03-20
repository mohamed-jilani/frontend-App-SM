import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { authInterceptorProviders } from './_helper/auth.interceptor';
import { NaveBareComponent } from './template/nave-bare/nave-bare.component';
import { SideBareComponent } from './template/side-bare/side-bare.component';
import { DashboardAdminComponent } from './pages/admin-pages/dashboard-admin/dashboard-admin.component';
import { ProfileAdminComponent } from './pages/admin-pages/profile-admin/profile-admin.component';
import { ProfileCommercantComponent } from './pages/commercant-pages/profile-commercant/profile-commercant.component';
import { DashboardCommercantComponent } from './pages/commercant-pages/dashboard-commercant/dashboard-commercant.component';
import { GestionCommandeComponent } from './pages/commercant-pages/gestion-commande/gestion-commande.component';
import { GestionClientComponent } from './pages/commercant-pages/gestion-client/gestion-client.component';
import { GestionCategorieComponent } from './pages/commercant-pages/gestion-categorie/gestion-categorie.component';
import { GestionProduitComponent } from './pages/commercant-pages/gestion-produit/gestion-produit.component';
import { ProfileChefusineComponent } from './pages/chef-usine-pages/profile-chefusine/profile-chefusine.component';
import { CommandeUsineComponent } from './pages/chef-usine-pages/commande-usine/commande-usine.component';
import { GestionPoseursComponent } from './pages/chef-pose-pages/gestion-poseurs/gestion-poseurs.component';
import { GestionLivreursComponent } from './pages/chef-pose-pages/gestion-livreurs/gestion-livreurs.component';
import { GestionVehiculesComponent } from './pages/chef-pose-pages/gestion-vehicules/gestion-vehicules.component';
import { PlanificationGroupesComponent } from './pages/chef-pose-pages/planification-groupes/planification-groupes.component';
import { ValidationCommandesComponent } from './pages/chef-pose-pages/validation-commandes/validation-commandes.component';
import { GestionClientsComponent } from './pages/chef-pose-pages/gestion-clients/gestion-clients.component';
import { HomeChefposeComponent } from './pages/chef-pose-pages/home-chefpose/home-chefpose.component';
import { HomeChefusineComponent } from './pages/chef-usine-pages/home-chefusine/home-chefusine.component';
import { ReclamationChefposeComponent } from './pages/chef-pose-pages/reclamation-chefpose/reclamation-chefpose.component';
import { ProfileChefposeComponent } from './pages/chef-pose-pages/profile-chefpose/profile-chefpose.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NaveBareComponent,
    SideBareComponent,
    DashboardAdminComponent,
    ProfileAdminComponent,
    ProfileCommercantComponent,
    DashboardCommercantComponent,
    GestionCommandeComponent,
    GestionClientComponent,
    GestionCategorieComponent,
    GestionProduitComponent,
    ProfileChefusineComponent,
    CommandeUsineComponent,
    GestionPoseursComponent,
    GestionLivreursComponent,
    GestionVehiculesComponent,
    PlanificationGroupesComponent,
    ValidationCommandesComponent,
    GestionClientsComponent,
    HomeChefposeComponent,
    HomeChefusineComponent,
    ReclamationChefposeComponent,
    ProfileChefposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
