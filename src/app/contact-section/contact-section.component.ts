import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, CKEditorModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})

export class ContactSectionComponent{

  // Variaveis.
  nome: string = '';
  email: string = '';
  errorText: string = '';

  // Configuração do ckeditor
  editor = {
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
    ],
  };

  // Textbox do ckeditor
  conteudo: string = '';

  constructor(private http: HttpClient) { }

  enviarEmail(): void {
    // Objeto representando o corpo do form.
    const body = {
      nome: this.nome,
      email: this.email,
      mensagem: this.conteudo
    };

    // Protocolo HTTP fazendo request para o servidor proprio de email.
    this.http.post('https://portfoliomailapi.vercel.app/sendMail', body).subscribe(
      (response: any) => {this.errorText = response.status},
      error => console.error(error)
    )
  }

  // Reativa o form depois da response.
  toggleForm(): void {
    this.errorText = '';
  }

}

