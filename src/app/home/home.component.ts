import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombreJugador: string = '';

  constructor(private router: Router) {}

  empezarJuego(): void {
    if (this.nombreJugador.trim().length > 0) {
      this.router.navigate(['/game'], { queryParams: { nombre: this.nombreJugador } });
    }
  }
}

