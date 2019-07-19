import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement, DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  constructor(private dataService: DataService) {}
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
