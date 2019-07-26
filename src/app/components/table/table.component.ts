import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DataService]
})
export class TableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  subscription: Subscription;

  constructor(private dataService: DataService) {}
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.getData();
    this.dataSource.sort = this.sort;
  }

  getData(): void {
    this.subscription = this.dataService.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
