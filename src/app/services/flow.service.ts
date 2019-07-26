import { Injectable } from '@angular/core';
import { interval, Subscription, merge, timer, Observable } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';
export interface StreamObject {
  id: number;
  stream: number;
}

@Injectable()
export class FlowService {
  streams: Subscription = new Subscription();

  stop(): void {
    if (this.streams) {
      this.streams.unsubscribe();
    }
  }

  setGenerator(
    streamNumber: number,
    period: number,
    startToSubscribe: number,
    duration: number,
  ): Observable<StreamObject> {
    return interval(period).pipe(
      map((value) => ({ id: value + 1, stream: streamNumber })),
      filter((val) => val.id * period > startToSubscribe),
      takeUntil(timer(duration + 1000)),
    );
  }

  mainStream(duration: number): Observable<StreamObject> {
    if (this.streams) {
      this.streams.unsubscribe();
    }
    const stream1 = this.setGenerator(1, 1000, 0, duration);
    const stream2 = this.setGenerator(2, 1500, 10000, duration);
    const stream3 = this.setGenerator(3, 2000, 20000, duration);
    this.streams.add(stream1.subscribe());
    this.streams.add(stream2.subscribe());
    this.streams.add(stream3.subscribe());
    const mainStream = merge(stream1, stream2, stream3);
    return mainStream;
  }
}
