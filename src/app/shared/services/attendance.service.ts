import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor() {}

  public hasAttendance(): boolean {
    const user = localStorage.getItem('attendance');
    return user !== null;
  }
}
