import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Search } from './search.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {

  constructor(private seachService: SearchService) { }


  search: Search = {
    adults: '',
    currencyCode: '',
    departureDate: '',
    destinationCode: '',
    max: '',
    originCode: '',
    returnDate: '',
  }

  flightsLists: Object[];

  ngOnInit(): void {
  }


  emptyList(list: any[]){
    if(list.length == 0){
      this.seachService.showMessage("A busca não retornou resultados, tente novamente...");
      return;
    }
  }

  searchVoos(): void {
    if (this.formSearchTickets.valid) {
      this.seachService.flightsList(this.search).subscribe(flightsList => {
        this.flightsLists = flightsList.data;
        this.emptyList(this.flightsLists);
      }, (err) => {
        this.seachService.showMessage("Erro ao listar dados de voo, tente novamente...");
      });
    }
  }

  formSearchTickets = new FormGroup({
    numero_adultos: new FormControl('', Validators.required),
    moeda_pagamento: new FormControl('', Validators.required),
    data_ida: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    num_max_resultados: new FormControl('', Validators.required),
    origem: new FormControl('', Validators.required),
    retorno: new FormControl('', Validators.required),
  })


}
