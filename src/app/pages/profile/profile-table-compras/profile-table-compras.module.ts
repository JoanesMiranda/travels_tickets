import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {ComprasComponent} from './compras.component';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [ComprasComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ComprasComponent]
})
export class ProfileTableComprasModule { }
