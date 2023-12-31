import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
  // Basic data
  email:  string = 'dev.joaovictor22@gmail.com';
  number: string = '+55 017 99733-8927';
}
