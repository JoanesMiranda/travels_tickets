import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchTicketsComponent } from './pages/search-tickets/search-tickets.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "search",
    component: SearchTicketsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
