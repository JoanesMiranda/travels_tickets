import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../pages/home/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false

  acesso: boolean = false

  fazerLogin(): void {
    if (JSON.parse(localStorage.getItem("token"))) {
      const { token } = JSON.parse(localStorage.getItem("token"))
      if (!!token) {
        this.mostrarMenu = true;
      }
    }
  }

  logOut(): void {
    localStorage.removeItem("token");
    window.location.reload();
    window.location.href = "/";
  }

  liberarAcesso(): void {

    const { token } = JSON.parse(localStorage.getItem("token"))

    if (!!token) {

      this.acesso = true;
    } else {
      this.acesso = false
    }

  }

  constructor(private authService: AuthService, private location: Location) {

  }


  ngOnInit() {
    this.fazerLogin()
  }


}
