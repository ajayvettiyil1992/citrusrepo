import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private http:HttpClient
  ) { }

  getTableData(){
    return this.http.get("https://www.ag-grid.com/example-assets/row-data.json");
  }
}
