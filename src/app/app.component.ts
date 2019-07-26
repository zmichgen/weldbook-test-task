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

  navigateToTask(taskNum: string) {
    this.router.navigate([`task${taskNum}`]);
  }
}
