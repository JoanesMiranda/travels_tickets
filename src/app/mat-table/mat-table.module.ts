import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableComponent} from './mat-table.component';



@NgModule({
  declarations: [MatTableComponent],
  imports: [
    CommonModule
  ],
  exports:[MatTableComponent]
})
export class MatTableModule { }
