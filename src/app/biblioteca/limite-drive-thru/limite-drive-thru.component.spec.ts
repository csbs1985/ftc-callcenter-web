import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteDriveThruComponent } from './limite-drive-thru.component';

describe('LimiteDriveThruComponent', () => {
  let component: LimiteDriveThruComponent;
  let fixture: ComponentFixture<LimiteDriveThruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LimiteDriveThruComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LimiteDriveThruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
