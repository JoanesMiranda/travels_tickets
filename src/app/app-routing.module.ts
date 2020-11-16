import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/favorites/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchTicketsComponent } from './pages/search-tickets/search-tickets.component';
import { CommonModule } from '@angular/common';
import { FavoritadosComponent } from './pages/favoritados/favoritados.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    // canActivate:[AuthGuard]
  },
  {

    path: "favorites/list",
    component: ListComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "search",
    component: SearchTicketsComponent,
    // canActivate:[AuthGuard]
  },


];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
