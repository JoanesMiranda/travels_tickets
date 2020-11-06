import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  companhia: string;
  saida: string;
  data: string;
  chegada: string;
  origem: string;
  destino: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { companhia: 'Gol', saida: 'Hydrogen', data: 'dsds', chegada: 'H', origem: 'indo', destino: 'vindo' },
  { companhia: 'Gol', saida: 'Hydrogen', data: 'sfsfs', chegada: 'H', origem: 'indo', destino: 'vindo' },
  { companhia: 'Gol', saida: 'Hydrogen', data: 'sfsfs', chegada: 'H', origem: 'indo', destino: 'vindo' },
  { companhia: 'Gol', saida: 'Hydrogen', data: 'sfsfs', chegada: 'H', origem: 'indo', destino: 'vindo' },
  { companhia: 'Gol', saida: 'Hydrogen', data: 'sfsfs', chegada: 'H', origem: 'indo', destino: 'vindo' },
  { companhia: 'Gol', saida: 'Hydrogen', data: 'sfsfs', chegada: 'H', origem: 'indo', destino: 'vindo' },
];

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {

  displayedColumns: string[] = ['companhia', 'saida', 'data', 'chegada', 'origem', 'destino', 'ações'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
