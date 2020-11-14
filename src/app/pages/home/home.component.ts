import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  login: Login = {
    senha: '',
    usuario: ''
  }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.signig(this.login).subscribe(resLogin => {
      this.router.navigate(['/profile']);
      localStorage.setItem("token", JSON.stringify(resLogin));
    }, (err) => {
      this.authService.showMessage("Usuário ou senha Invalido");
    });
  }

}
