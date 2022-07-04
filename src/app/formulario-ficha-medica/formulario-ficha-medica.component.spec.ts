import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFichaMedicaComponent } from './formulario-ficha-medica.component';

describe('FormularioFichaMedicaComponent', () => {
  let component: FormularioFichaMedicaComponent;
  let fixture: ComponentFixture<FormularioFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFichaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
