import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusoHorarioComponent } from './fuso-horario.component';

describe('FusoHorarioComponent', () => {
  let component: FusoHorarioComponent;
  let fixture: ComponentFixture<FusoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusoHorarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FusoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
