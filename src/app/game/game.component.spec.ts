import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
      declarations: [GameComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia inicializar con los valores por defecto', () => {
    expect(component.nombreJugador).toEqual('');
    expect(component.puntos).toEqual(0);
    expect(component.dificultad).toEqual('bajo');
    expect(component.numeros).toEqual([]);
    expect(component.mostrarNumeros).toEqual([]);
    expect(component.juegoEmpezado).toBeFalsy();
    expect(component.posicionCeldaCorrecta).toEqual(0);
    expect(component.numCorrecto).toEqual(0);
    expect(component.juegoTerminado).toBeFalsy();
    expect(component.esClickable).toBeFalsy();
  });

  it('Deberia iniciar el juego cuando llamemos al metodo: empezarJuego()', () => {
    spyOn(component, 'generarNumeros');
    spyOn(component, 'mostrarNumerosDurante');

    component.empezarJuego();

    expect(component.juegoEmpezado).toBeTruthy();
    expect(component.generarNumeros).toHaveBeenCalled();
    expect(component.mostrarNumerosDurante).toHaveBeenCalled();
  });
});
