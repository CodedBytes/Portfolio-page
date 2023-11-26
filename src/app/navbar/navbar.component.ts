import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navCharColor: string = '';
  navColor: string = 'rgba(0, 0, 0, 0.3)';
  filter: string = '';
  links: string[] = ['Inicio', 'Trabalhos', 'Contato'];
  urls: string[] = ['#main', '#jobs', '#contact'];

  constructor(){}

  // NavBarConfig
  initConfig(active: boolean, charColor: string, blur: number): boolean {
      // Aplicando blur
      (blur !== 0) ? this.filter = `blur(${blur}px)` : `blur(0px)`;

      // Aplicando cor de texto
      // The default color is white
      this.navCharColor = charColor;

      // Return
      return active;
  }
}
