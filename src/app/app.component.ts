import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-task';

  constructor(private router: Router) {}

  navigateToTask1() {
    this.router.navigate(['task1']);
  }

  navigateToTask2() {
    this.router.navigate(['task2']);
  }

  navigateToTask3() {
    this.router.navigate(['task3']);
  }
}
