import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
  interval,
  Subscription,
} from 'rxjs';
import { debounceTime, delay, multicast, refCount } from 'rxjs/operators';

export interface StreamObject {
  id: number;
  stream: number;
}

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  stream1: Subject<StreamObject> = new Subject<StreamObject>();
  stream2: Subject<StreamObject> = new Subject<StreamObject>();
  stream3: Subject<StreamObject> = new Subject<StreamObject>();
  summ: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  summa = 0;
  subscriptions: Subscription = new Subscription();

  constructor() {}

  addToSumma(id: number) {
    this.summa = this.summa + id;
    this.summ.next(this.summa);
  }

  start() {
    const sub2 = new Subject();
    const sub3 = new Subject();

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

    setTimeout(() => {
      this.subscriptions.add(
        refCounted2.subscribe((i: number) => {
          this.stream2.next({ id: i + 1, stream: 2 });
          this.addToSumma(i + 1);
        }),
      );
    }, 10000);

    setTimeout(() => {
      this.subscriptions.add(
        refCounted3.subscribe((i: number) => {
          this.stream3.next({ id: i + 1, stream: 3 });
          this.addToSumma(i + 1);
        }),
      );
    }, 20000);

    setTimeout(() => {
      this.subscriptions.unsubscribe();
    }, 30000);
  }
}
