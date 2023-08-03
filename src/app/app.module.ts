import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TextoTituloComponent } from './texto-titulo/texto-titulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextoInputJugadorComponent } from './texto-input-jugador/texto-input-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TextoTituloComponent,
    TextoInputJugadorComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
