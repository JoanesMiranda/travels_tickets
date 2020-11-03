import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableComponent} from '../../mat-table/mat-table.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ProfileComponent,MatTableComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class ProfileModule { }
