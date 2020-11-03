import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../shared/component/header/header.component';
import {FooterComponent} from '../shared/component/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
