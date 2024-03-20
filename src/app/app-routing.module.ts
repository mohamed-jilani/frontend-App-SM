import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import {DashboardAdminComponent} from "./pages/admin-pages/dashboard-admin/dashboard-admin.component";
import {
  DashboardCommercantComponent
} from "./pages/commercant-pages/dashboard-commercant/dashboard-commercant.component";
import {ProfileAdminComponent} from "./pages/admin-pages/profile-admin/profile-admin.component";
import {ProfileCommercantComponent} from "./pages/commercant-pages/profile-commercant/profile-commercant.component";
import {GestionClientComponent} from "./pages/commercant-pages/gestion-client/gestion-client.component";
import {GestionClientsComponent} from "./pages/chef-pose-pages/gestion-clients/gestion-clients.component";
import {GestionProduitComponent} from "./pages/commercant-pages/gestion-produit/gestion-produit.component";
import {GestionCategorieComponent} from "./pages/commercant-pages/gestion-categorie/gestion-categorie.component";
import {GestionCommandeComponent} from "./pages/commercant-pages/gestion-commande/gestion-commande.component";
import {
  ValidationCommandesComponent
} from "./pages/chef-pose-pages/validation-commandes/validation-commandes.component";
import {
  PlanificationGroupesComponent
} from "./pages/chef-pose-pages/planification-groupes/planification-groupes.component";
import {GestionVehiculesComponent} from "./pages/chef-pose-pages/gestion-vehicules/gestion-vehicules.component";
import {GestionLivreursComponent} from "./pages/chef-pose-pages/gestion-livreurs/gestion-livreurs.component";
import {GestionPoseursComponent} from "./pages/chef-pose-pages/gestion-poseurs/gestion-poseurs.component";
import {HomeChefposeComponent} from "./pages/chef-pose-pages/home-chefpose/home-chefpose.component";
import {HomeChefusineComponent} from "./pages/chef-usine-pages/home-chefusine/home-chefusine.component";
import {CommandeUsineComponent} from "./pages/chef-usine-pages/commande-usine/commande-usine.component";
import {
  ReclamationChefposeComponent
} from "./pages/chef-pose-pages/reclamation-chefpose/reclamation-chefpose.component";
import {ProfileChefposeComponent} from "./pages/chef-pose-pages/profile-chefpose/profile-chefpose.component";
import {ProfileChefusineComponent} from "./pages/chef-usine-pages/profile-chefusine/profile-chefusine.component";
import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },

  { path: 'admin', component: BoardAdminComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent , children:[
      { path: 'profile-admin', component: ProfileAdminComponent },
    ]},

  { path: 'dashboard-commercant', component: DashboardCommercantComponent , children: [
      { path: 'profile-commercant', component: ProfileCommercantComponent },
      { path: 'com-commande', component: GestionCommandeComponent },
      { path: 'com-client', component: GestionClientComponent },
      { path: 'com-produit', component: GestionProduitComponent },
      { path: 'com-categorie', component: GestionCategorieComponent },

    ]},

  { path: 'dashboard-chefPose', component: HomeChefposeComponent , children: [
      { path: 'chp-profile', component: ProfileChefposeComponent },
      { path: 'chp-reclamations', component: ReclamationChefposeComponent },
      { path: 'chp-poseurs', component: GestionPoseursComponent },
      { path: 'chp-livreurs', component: GestionLivreursComponent },
      { path: 'chp-vehicules', component: GestionVehiculesComponent },
      { path: 'chp-planification', component: PlanificationGroupesComponent },
      { path: 'chp-clients', component: GestionClientsComponent },
      { path: 'chp-commandes', component: ValidationCommandesComponent },

    ]},

  { path: 'dashboard-chefUsine', component: HomeChefusineComponent , children: [
      { path: 'chu-commandes', component: CommandeUsineComponent },
      { path: 'chu-profile', component: ProfileChefusineComponent },
    ]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
