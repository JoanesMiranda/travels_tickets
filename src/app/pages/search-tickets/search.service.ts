import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Search } from './search.model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {


  token = "";

  baseUrl = "https://javatravelers-backend.azurewebsites.net/tickets/offers";


  constructor(private http: HttpClient) { }


  flightsList(search: Search): Observable<Search[]> {
    return this.http.post<Search[]>(this.baseUrl, search);
  }


  getToken() {
    localStorage.setItem('token', this.token);
    return localStorage.getItem('token');
  }

}
