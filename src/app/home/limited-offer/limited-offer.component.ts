import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  templateUrl: './limited-offer.component.html',
  styleUrls: ['./limited-offer.component.css']
})
export class LimitedOfferComponent
//  implements OnInit, OnDestroy 

 {

  countdown: any;
  endTime: string = new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(); // Set to 24 hours from now

  days: string = '0';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  // private timeInterval: any;

  // ngOnInit() {
  //   this.initializeClock();
  // }

  // ngOnDestroy() {
  //   clearInterval(this.timeInterval);
  // }

  // private getTimeRemaining(endtime: string) {
  
  //   const total = Date.parse(endtime) - Date.parse(new Date().toString());
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //   return { total, days, hours, minutes, seconds };
  // }

  // private initializeClock() {
  //   this.updateClock();
  //   this.timeInterval = setInterval(() => {
  //     this.updateClock();
  //   }, 1000);
  // }

  // private updateClock() {

  //   // console.log('Updating clock...');
  //   const t = this.getTimeRemaining(this.endTime);
  //   this.days = t.days.toString();
  //   this.hours = ('0' + t.hours).slice(-2);
  //   this.minutes = ('0' + t.minutes).slice(-2);
  //   this.seconds = ('0' + t.seconds).slice(-2);
  //   // console.log(`Clock updated: ${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds`);

  //   if (t.total <= 0) {
  //     clearInterval(this.timeInterval);
  //   }
  // }
}
