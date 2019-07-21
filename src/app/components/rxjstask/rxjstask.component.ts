import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlowService, StreamObject } from 'src/app/services/flow.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjstask',
  templateUrl: './rxjstask.component.html',
  styleUrls: ['./rxjstask.component.scss'],
})
export class RxjstaskComponent implements OnInit, OnDestroy {
  summ = 0;
  stream1: StreamObject[] = [];
  stream2: StreamObject[] = [];
  stream3: StreamObject[] = [];
  subscriptions: Subscription = new Subscription();
  constructor(private flowService: FlowService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.flowService.stream1.subscribe((obj) => this.stream1.push(obj)),
    );
    this.subscriptions.add(
      this.flowService.stream2.subscribe((obj) => this.stream2.push(obj)),
    );
    this.subscriptions.add(
      this.flowService.stream3.subscribe((obj) => this.stream3.push(obj)),
    );
    this.subscriptions.add(
      this.flowService.summ.subscribe((summa) => (this.summ = summa)),
    );
  }

  start() {
    this.flowService.start();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
