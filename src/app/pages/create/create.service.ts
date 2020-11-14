import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Create } from './create.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  baseUrl = "https://javatravelers-backend.azurewebsites.net/signup";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })

  }

  create(user: Create): Observable<Create> {
    return this.http.post<Create>(this.baseUrl, user);
  }

}
