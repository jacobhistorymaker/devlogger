import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Generated components', date: new Date('10/21/2021 10:11:24') },
    //   { id: '2', text: 'Added Bootstrap', date: new Date('10/20/2021 12:01:11') },
    //   { id: '3', text: 'Added logs component', date: new Date('10/19/2021 08:07:07') }
    // ];
    this.logs = [];

  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(newLog: Log) {
    // Push at the beginning
    this.logs.unshift(newLog);
  }

  updateLog(updLog: Log) {
    
    this.logs.forEach((current, index)=>{
      // delete it from it's current position
      if(updLog.id === current.id){
        this.logs.splice(index, 1);
      }
    });
    // add it on top of the logs
    this.logs.unshift(updLog);
  }

  deleteLog(log: Log) {
    this.logs.forEach((current, index)=>{
      if(log.id === current.id){
        this.logs.splice(index,1);
      }
    })
  }

  clearState() {
    this.stateSource.next(true);
  }

}
