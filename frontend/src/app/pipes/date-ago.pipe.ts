/*
Goal:
2021-04-12T15:02:56.863Z => a 10 minutes ago

This code is copied from:
https://medium.com/@thunderroid/angular-date-ago-pipe-minutes-hours-days-months-years-ago-c4b5efae5fe5
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        'year': 31536000, //'year'
        'month': 2592000, //'month'
        'week': 604800, //'week'
        'day': 86400, //'day'
        'hour': 3600, //'hour'
        'minute': 60, //'minute'
        'second': 1 //'second'
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's ago'; // plural (2 days ago)
          }
      }
    }
    return value;
  }

}