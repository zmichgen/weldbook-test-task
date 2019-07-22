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
  stream1: StreamObject[];
  stream2: StreamObject[];
  stream3: StreamObject[];
  subscriptions: Subscription = new Subscription();
  constructor(private flowService: FlowService) {}

  ngOnInit() {}

  start() {
    const duration = 30000;
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.subscriptions = new Subscription();
    this.stream1 = [];
    this.stream2 = [];
    this.stream3 = [];
    this.summ = 0;
    this.subscriptions.add(
      this.flowService.mainStream(duration).subscribe((data) => {
        this.getData(data);
      }),
    );
  }

  getData(data) {
    this.summ += data.id;
    switch (data.stream) {
      case 1: {
        this.stream1.push(data);
        break;
      }
      case 2: {
        this.stream2.push(data);
        break;
      }
      case 3: {
        this.stream3.push(data);
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.flowService.stop();
  }
}
