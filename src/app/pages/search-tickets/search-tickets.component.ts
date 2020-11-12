import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  formSearchTickets = new FormGroup({
    origem: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    quant_pessoas: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
  })

  acessar() {
    console.log(this.formSearchTickets.invalid);
  }


}
