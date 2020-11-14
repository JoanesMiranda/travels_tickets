import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProfileTableDataSource, Voo } from './profile-table-datasource';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Voo>;
  dataSource: ProfileTableDataSource;
  titulo='Reservas'
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['numero', 'companhia', 'saida','chegada', 'data', 'origem','destino', 'preco','comprar'];

  ngOnInit() {
    this.dataSource = new ProfileTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
