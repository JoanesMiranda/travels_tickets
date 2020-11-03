import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {ProfileTableModule} from '../../profile-table-Reservas/profile-table.module';
import {ProfileTableComprasModule} from '../../profile-table-compras/profile-table-compras.module';
import { ProfileImageModule } from './profile-image/profile-image.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileTableModule,
    ProfileTableComprasModule,
    ProfileImageModule
  ]
})
export class ProfileModule { }
