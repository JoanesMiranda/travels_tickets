import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/favorites/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    path:"favorit/list",
    component:ListComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
