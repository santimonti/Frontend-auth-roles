import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimerService {
  display: any;
  interval: any;
  time: number = 0;
  constructor() {}
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ' Minutes : ' + (value - minutes * 60);
  }
  startTimer() {
    return (this.interval = interval(1000));
  }
  stopTimer(interval: any) {
    return interval.unsubscribe();
  }
}
