import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListItem {
  id: number;
  airline: string;
  saida:string;
  hour:string;
  flightStretch:string;
  preco:string;
  delete:string;
  comprar:string
}

// TODO: replace this with real data from your application
const DATA: ListItem[] = [
  {id: 1, airline: 'Latam', saida:'15/11/2020', hour:'7:30', flightStretch:'REC/SSA',preco:'R$1200',delete:'',comprar:''},
  {id: 2, airline: 'Azul', saida:'05/11/2020', hour:'11:30', flightStretch:'MCZ/SSA',preco:'R$900',delete:'',comprar:''},
  {id: 3, airline: 'Latam', saida:'18/11/2020', hour:'19:30', flightStretch:'SP/RJ',preco:'R$1500',delete:'',comprar:''},
  {id: 4, airline: 'Cruzeiro', saida:'15/11/2020', hour:'12:30', flightStretch:'Rec/MCZ',preco:'R$750',delete:'',comprar:''},
  {id: 5, airline: 'Latam', saida:'25/11/2020', hour:'22:30', flightStretch:'SP/RJ',preco:'R$1000',delete:'',comprar:''},
  {id: 6, airline: 'Gol', saida:'15/11/2020', hour:'15:30', flightStretch:'REC/SSA',preco:'R$1200',delete:'',comprar:''},
  {id: 7, airline: 'Gol', saida:'05/11/2020', hour:'20:30', flightStretch:'Rec/Mcz',preco:'R$900',delete:'',comprar:''},
  {id: 8, airline: 'Latam', saida:'18/11/2020', hour:'6:00', flightStretch:'SP/RJ',preco:'R$1500',delete:'',comprar:''},
  {id: 9, airline: 'Azul', saida:'15/11/2020', hour:'7:30', flightStretch:'REC/SP',preco:'R$750',delete:'',comprar:''},
  {id: 10, airline: 'Latam', saida:'25/11/2020', hour:'18:30', flightStretch:'REC/RN',preco:'R$1000',delete:'',comprar:''},
];

/**
 * Data source for the List view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListDataSource extends DataSource<ListItem> {
  data: ListItem[] = DATA;
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
  connect(): Observable<ListItem[]> {
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
  private getPagedData(data: ListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'airline': return compare(a.airline, b.airline, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'saida': return compare(a.saida, b.saida, isAsc);
        case 'hour': return compare(a.hour, b.hour, isAsc);
        case 'flightStretch': return compare(a.flightStretch, b.flightStretch, isAsc);
        case 'preco': return compare(a.preco, b.preco, isAsc);
        case 'delete': return compare(a.delete, b.delete, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
