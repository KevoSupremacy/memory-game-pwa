import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-texto-titulo',
  templateUrl: './texto-titulo.component.html',
  styleUrls: ['./texto-titulo.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('blurred', style({ opacity: 0, filter: 'blur(5px)' })),
      transition('visible <=> blurred', animate('1s')),
    ]),
  ],
})

export class TextoTituloComponent implements OnInit {

  isBlurred: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isBlurred = false;
    }, 500);
  }

}