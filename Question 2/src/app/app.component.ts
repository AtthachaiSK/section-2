import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface CategoriesElement {
  name: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private categoriesService: CategoriesService) {

  }
  async ngOnInit() {
    let data = await this.categoriesService.getCategories().toPromise()
    let mapKey = data.map((v) => ({ "name": v }))
    this.dataSource = new MatTableDataSource(mapKey);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
