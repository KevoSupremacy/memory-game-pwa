import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-input-jugador',
  templateUrl: './texto-input-jugador.component.html',
  styleUrls: ['./texto-input-jugador.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('blurred', style({ opacity: 0, filter: 'blur(5px)' })),
      transition('visible <=> blurred', animate('1s')),
    ]),
  ],
})
export class TextoInputJugadorComponent {

  nombreJugador: string = '';
  isBlurred: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isBlurred = false;
    }, 1000);
  }

  empezarJuego(): void {
    if (this.nombreJugador.trim().length > 0) {
      this.router.navigate(['/game'], { queryParams: { nombre: this.nombreJugador } });
    }
  }

}
