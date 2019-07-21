import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, interval, Subscription } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';

export interface StreamObject {
  id: number;
  stream: number;
}

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  stream1: Subject<StreamObject>;
  stream2: Subject<StreamObject>;
  stream3: Subject<StreamObject>;
  summ: BehaviorSubject<number>;
  summa = 0;
  subscriptions: Subscription;
  timeOuts = [];

  constructor() {}

  addToSumma(id: number) {
    this.summa = this.summa + id;
    this.summ.next(this.summa);
  }

  start() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.clearTimeouts();
    const sub2 = new Subject();
    const sub3 = new Subject();
    this.stream1 = new Subject();
    this.stream2 = new Subject();
    this.stream3 = new Subject();
    this.summ = new BehaviorSubject<number>(0);
    this.summa = 0;
    this.subscriptions = new Subscription();

    const refCounted2 = interval(1500).pipe(
      multicast(sub2),
      refCount(),
    );

    const refCounted3 = interval(2000).pipe(
      multicast(sub3),
      refCount(),
    );

    this.subscriptions.add(
      interval(1000).subscribe((i: number) => {
        this.stream1.next({ id: i + 1, stream: 1 });
        this.addToSumma(i + 1);
      }),
    );

    this.subscriptions.add(refCounted2.subscribe((v) => v));
    this.subscriptions.add(refCounted3.subscribe((v) => v));

    this.timeOuts.push(
      setTimeout(() => {
        this.subscriptions.add(
          refCounted2.subscribe((i: number) => {
            this.stream2.next({ id: i + 1, stream: 2 });
            this.addToSumma(i + 1);
          }),
        );
      }, 10000),
    );

    this.timeOuts.push(
      setTimeout(() => {
        this.subscriptions.add(
          refCounted3.subscribe((i: number) => {
            this.stream3.next({ id: i + 1, stream: 3 });
            this.addToSumma(i + 1);
          }),
        );
      }, 20000),
    );

    this.timeOuts.push(
      setTimeout(() => {
        this.subscriptions.unsubscribe();
      }, 30000),
    );
  }

  clearTimeouts() {
    this.timeOuts.forEach((timer) => {
      clearTimeout(timer);
    });
  }

  stop() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.clearTimeouts();
  }
}
