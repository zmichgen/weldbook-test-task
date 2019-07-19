import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  showTable = false;
  buttonText = 'Показать таблицу';

  constructor() {}

  ngOnInit() {}

  toggleTableShow() {
    this.showTable = !this.showTable;
    this.buttonText = this.showTable ? 'Спрятать таблицу' : 'Показать таблицу';
  }
}
