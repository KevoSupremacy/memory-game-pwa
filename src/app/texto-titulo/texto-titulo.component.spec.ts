import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoTituloComponent } from './texto-titulo.component';

describe('TextoTituloComponent', () => {
  let component: TextoTituloComponent;
  let fixture: ComponentFixture<TextoTituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoTituloComponent]
    });
    fixture = TestBed.createComponent(TextoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
