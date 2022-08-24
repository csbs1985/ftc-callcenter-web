import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBotaoComponent } from './input-botao.component';

describe('InputBotaoComponent', () => {
  let component: InputBotaoComponent;
  let fixture: ComponentFixture<InputBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBotaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
