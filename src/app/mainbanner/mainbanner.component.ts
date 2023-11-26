import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainbanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainbanner.component.html',
  styleUrl: './mainbanner.component.css'
})

export class MainbannerComponent {

  // Posição do scroll atual.
  scrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(): boolean {
    this.scrollPosition = window.scrollY;// Pega posição da tela
    let ret = false;// return pra function.

    // Operador ternario para decidir se vai ficar true ou não
    (this.scrollPosition > 100) ? ret = false : ret = true;

    // Retorno
    return ret;
  }

  constructor(){}
}
