import { EventEmitter, Injectable } from '@angular/core';
import { Login } from './home.model';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  baseUrl = "https://javatravelers-backend.azurewebsites.net/login";

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }
  
  showMessage(msg: string): void {

    this.snackbar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })

  }

  signig(dataUser: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl, dataUser);
  }
 

}

// fazerLogin(usuario: Login) {
//   if (usuario.nome === 'bryner' &&
//     usuario.senha === '123') {

//     this.usuarioAutenticado = true;

//     this.mostrarMenuEmitter.emit(true);

//     this.router.navigate(['/profile']);

//   } else {
//     this.usuarioAutenticado = false;
//     this.mostrarMenuEmitter.emit(false);
//   }
// }