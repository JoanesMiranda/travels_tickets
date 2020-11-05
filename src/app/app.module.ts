import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchTicketsComponent } from './pages/search-tickets/search-tickets.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {ProfileTableModule} from './pages/profile/profile-table-Reservas/profile-table.module';
import {ProfileTableComprasModule} from './pages/profile/profile-table-compras/profile-table-compras.module';
import { ProfileImageModule } from './pages/profile/profile-image/profile-image.module';

@NgModule({
  declarations: [AppComponent,
    SearchTicketsComponent,
    CreateComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    ProfileTableModule,
    ProfileTableComprasModule,
    ProfileImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
