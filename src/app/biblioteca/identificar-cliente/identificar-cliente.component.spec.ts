import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarClienteComponent } from './identificar-cliente.component';

describe('IdentificarClienteComponent', () => {
  let component: IdentificarClienteComponent;
  let fixture: ComponentFixture<IdentificarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificarClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentificarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
