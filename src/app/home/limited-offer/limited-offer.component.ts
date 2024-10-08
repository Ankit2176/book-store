import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './limited-offer.component.html',
  styleUrls: ['./limited-offer.component.css']
})
export class LimitedOfferComponent
  implements OnInit, OnDestroy {
  private timeInterval: any;
  public endTime: Date = new Date('2024-12-31T23:59:59'); // Ensure this is a valid future date
  public days: string = '0';
  public hours: string = '00';
  public minutes: string = '00';
  public seconds: string = '00';

  ngOnInit() {
    this.initializeClock();
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  // Optimized function that doesn't re-parse dates
  private getTimeRemaining(endtime: Date) {
    const total = endtime.getTime() - new Date().getTime();
    if (total < 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  private initializeClock() {
    this.updateClock(); // Immediate update to prevent initial delay
    this.timeInterval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  private updateClock() {
    const t = this.getTimeRemaining(this.endTime);

    if (t.total <= 0) {
      clearInterval(this.timeInterval);
    }

    // Safely update the UI
    this.days = t.days.toString();
    this.hours = ('0' + t.hours).slice(-2);
    this.minutes = ('0' + t.minutes).slice(-2);
    this.seconds = ('0' + t.seconds).slice(-2);
  }
}