import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
