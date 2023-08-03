import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  nombreJugador: string = '';
  puntos: number = 0;
  dificultad: string = 'bajo';
  numeros: number[] = [];
  mostrarNumeros: (number | string)[] = [];
  juegoEmpezado: boolean = false;
  posicionCeldaCorrecta: number = 0;
  juegoTerminado: boolean = false;
  esClickable: boolean = false;
  numCorrecto: number = 0;
  numeroAMemorizar: boolean = false;
  juegoEnCurso: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.nombreJugador = params['nombre'] || '';
    });
  }

  empezarJuego(): void {
    this.generarNumeros();
    this.juegoEmpezado = true;
    this.mostrarNumerosDurante(this.tiempoDeEspera());
    this.juegoEnCurso = false;
  }
 

  generarNumeros(): void {
    this.numeros = this.aleatorizarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.posicionCeldaCorrecta = Math.floor(Math.random() * this.numeros.length);
    this.numCorrecto = this.numeros[this.posicionCeldaCorrecta];
  }

  mostrarNumerosDurante(duration: number): void {
    this.numeroAMemorizar = false;
    this.mostrarNumeros = this.numeros.slice();
    setTimeout(() => {
      this.numeroAMemorizar = true
      this.esClickable = true;
      this.mostrarNumeros = this.numeros.map(() => '?');
    }, duration);
  }

  clickCelda(index: number): void {
    if (this.esClickable && this.juegoEmpezado && !this.juegoTerminado) {
      this.juegoEnCurso = true;
      this.juegoEmpezado = false;
      if (index === this.posicionCeldaCorrecta) {
        this.mostrarNumeros = this.numeros.slice();
        this.puntos += this.puntosPorDificultad();
        this.esClickable = false;
        setTimeout(() => {
          this.juegoEmpezado = true;
          this.juegoEnCurso = false;
          this.generarNumeros();
          this.mostrarNumerosDurante(this.tiempoDeEspera());
        }, 1000);

      } else {
        this.mostrarNumeros = this.numeros.slice();
        this.juegoEmpezado = false;
        this.juegoEnCurso = true;
        this.juegoTerminado = true;
      }

    }
  }


  terminarJuego(): void {
    this.juegoEnCurso = false;
    this.juegoEmpezado = false;
    this.juegoTerminado = false;
    this.esClickable = false;
    this.numeroAMemorizar = false;
    this.puntos = 0;
  }

  tiempoDeEspera(): number {
    switch (this.dificultad) {
      case 'bajo':
        return 10000;
      case 'medio':
        return 5000;
      case 'alto':
        return 2000;
      default:
        return 10000;
    }
  }

  puntosPorDificultad(): number {
    switch (this.dificultad) {
      case 'bajo':
        return 10;
      case 'medio':
        return 20;
      case 'alto':
        return 30;
      default:
        return 10;
    }
  }

  cambiarJugador(): void {
    this.router.navigate(['']);
  }

  private aleatorizarNumeros(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
