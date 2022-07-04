import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFichaMedicaComponent } from './lista-ficha-medica.component';

describe('ListaFichaMedicaComponent', () => {
  let component: ListaFichaMedicaComponent;
  let fixture: ComponentFixture<ListaFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFichaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
