import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultasMedicasComponent } from './lista-consultas-medicas.component';

describe('ListaConsultasMedicasComponent', () => {
  let component: ListaConsultasMedicasComponent;
  let fixture: ComponentFixture<ListaConsultasMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConsultasMedicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsultasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
