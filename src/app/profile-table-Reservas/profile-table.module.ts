import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileTableComponent} from './profile-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [ProfileTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[ProfileTableComponent]
})
export class ProfileTableModule { }
