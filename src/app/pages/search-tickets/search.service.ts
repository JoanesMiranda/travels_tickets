import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Search } from './search.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = "https://javatravelers-backend.azurewebsites.net/tickets/offers";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  flightsList(search: Search): Observable<any> {
    return this.http.post<Search[]>(this.baseUrl, search);
  }

}
