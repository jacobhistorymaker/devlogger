import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('10/21/2021 10:11:24')},
      {id: '1', text: 'Added Bootstrap', date: new Date('10/20/2021 12:01:11')},
      {id: '1', text: 'Added logs component', date: new Date('10/19/2021 08:07:07')}
    ];

   }

   getLogs(){
     return this.logs;
   }
}
