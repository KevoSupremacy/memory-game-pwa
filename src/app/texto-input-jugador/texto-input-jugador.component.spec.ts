import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoInputJugadorComponent } from './texto-input-jugador.component';

describe('TextoInputJugadorComponent', () => {
  let component: TextoInputJugadorComponent;
  let fixture: ComponentFixture<TextoInputJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoInputJugadorComponent]
    });
    fixture = TestBed.createComponent(TextoInputJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
