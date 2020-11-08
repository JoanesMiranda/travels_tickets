import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommonModule } from '@angular/common';
import { FavoritadosComponent } from './pages/favoritados/favoritados.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"create",
    component:CreateComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"favoritados",
    component:FavoritadosComponent
  },
  
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
