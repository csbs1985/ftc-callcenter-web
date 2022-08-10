import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private localStorageService: LocalStorageService) {}

  public hasAttendance(): boolean {
    const user = this.localStorageService.find('attendance');
    return user !== null;
  }
}
