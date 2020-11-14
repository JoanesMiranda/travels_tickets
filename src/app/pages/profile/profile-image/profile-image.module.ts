import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileImageComponent} from './profile-image.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [ProfileImageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports:[ProfileImageComponent,
  RouterModule]
})
export class ProfileImageModule { }
