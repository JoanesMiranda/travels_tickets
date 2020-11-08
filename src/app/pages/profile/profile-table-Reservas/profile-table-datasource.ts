import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface Voo {
  numero: number;
  companhia: string;
  saida:string;
  chegada:string;
  data:string;
  origem:string;
  destino:string;
  preco:string;
  comprar:string
}

// TODO: replace this with real data from your application
const RESERVAS: Voo[] = [
  {numero: 1, companhia: 'Latam', saida:'15/11/2020', chegada:'15/11/2020', data:'02/11/2020', origem:'Recife', destino:'Fortaleza',preco:'R$1200',comprar:''},
  {numero: 2, companhia: 'Azul', saida:'05/11/2020', chegada:'05/11/2020', data:'30/10/2020', origem:'Recife', destino:'Salvador',preco:'R$900',comprar:''},
  {numero: 3, companhia: 'Latam', saida:'18/11/2020', chegada:'18/11/2020', data:'03/11/2020', origem:'Recife', destino:'Petrolina',preco:'R$1500',comprar:''},
  {numero: 4, companhia: 'Cruzeiro', saida:'15/11/2020', chegada:'15/11/2020', data:'12/11/2020', origem:'Recife', destino:'Maceio',preco:'R$750',comprar:''},
  {numero: 5, companhia: 'Latam', saida:'25/11/2020', chegada:'25/11/2020', data:'03/11/2020', origem:'Recife', destino:'Fortaleza',preco:'R$1000',comprar:''},
  {numero: 6, companhia: 'Azul', saida:'10/11/2020', chegada:'10/11/2020', data:'01/11/2020', origem:'Recife', destino:'Salvador',preco:'R$900',comprar:''},
  {numero: 7, companhia: 'Latam', saida:'13/11/2020', chegada:'13/11/2020', data:'28/10/2020', origem:'Recife', destino:'Joao Pessoa',preco:'R$1300',comprar:''},
  {numero: 8, companhia: 'Latam', saida:'11/11/2020', chegada:'11/11/2020', data:'21/10/2020', origem:'Recife', destino:'Fortaleza',preco:'R$1100',comprar:''},
  {numero: 9, companhia: 'Latam', saida:'25/11/2020', chegada:'25/11/2020', data:'03/11/2020', origem:'Recife', destino:'Brasilia',preco:'R$850',comprar:''},
  {numero: 10,companhia: 'Latam', saida:'15/11/2020', chegada:'15/11/2020', data:'02/11/2020', origem:'Recife', destino:'Fortaleza',preco:'R$400',comprar:''},
];

/**
 * Data source for the ProfileTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProfileTableDataSource extends DataSource<Voo> {
  data: Voo[] = RESERVAS;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Voo[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Voo[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Voo[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'companhia': return compare(a.companhia, b.companhia, isAsc);
        case 'numero': return compare(+a.numero, +b.numero, isAsc);
        case 'saida': return compare(a.saida, b.saida, isAsc);
        case 'chegada': return compare(a.chegada, b.chegada, isAsc);
        case 'data': return compare(a.data, b.data, isAsc);
        case 'origem': return compare(a.origem, b.origem, isAsc);
        case 'destino': return compare(a.destino, b.destino, isAsc);
        case 'preco': return compare(a.preco, b.preco, isAsc);
        case 'comprar': return compare(a.comprar, b.comprar, isAsc);


        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
