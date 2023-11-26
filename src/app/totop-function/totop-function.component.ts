import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-totop-function',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totop-function.component.html',
  styleUrl: './totop-function.component.css'
})
export class TotopFunctionComponent {

  scrollPosition: number = 0;
  mostrarSeta = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollPosition = window.scrollY;// Pega posição da tela

    // Operador ternario para decidir se vai ficar true ou não
    (this.scrollPosition > 170) ? this.mostrarSeta = true : this.mostrarSeta = false;
  }

  // Funcção para voltar ao topo.
  voltarAoTopo(): void {
    // Rola suavemente para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Whatsapp
  enviarMensagem() {
    const numeroTelefone = '+55017997338927';
    const mensagem = 'Olá joão victor, podemos conversar?';

    // URL
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;

    // Abrindo url
    window.open(urlWhatsapp, '_blank');
  }
}
