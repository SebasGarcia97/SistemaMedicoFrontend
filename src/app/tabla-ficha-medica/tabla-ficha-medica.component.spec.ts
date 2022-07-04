import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFichaMedicaComponent } from './tabla-ficha-medica.component';

describe('TablaFichaMedicaComponent', () => {
  let component: TablaFichaMedicaComponent;
  let fixture: ComponentFixture<TablaFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFichaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
