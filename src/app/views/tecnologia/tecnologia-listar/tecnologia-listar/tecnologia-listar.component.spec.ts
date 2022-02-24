import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaListarComponent } from './tecnologia-listar.component';

describe('TecnologiaListarComponent', () => {
  let component: TecnologiaListarComponent;
  let fixture: ComponentFixture<TecnologiaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
