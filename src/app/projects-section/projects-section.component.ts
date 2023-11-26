import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Project{
  name: string;
  projLink: string;
  imgUrl: string;
  description: string;
  tragName: string;
  languagesUse: string[];

  // Constructor
  constructor(name: string, projLink:string, imgUrl: string, tagName: string, languagesUsed: string[], description: string){
    this.name = name;
    this.projLink = projLink;
    this.imgUrl = imgUrl;
    this.tragName = tagName;
    this.languagesUse = languagesUsed;
    this.description = description;
  }
}



@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {
  //Array com a linguagens para usar nos projetos
  LangsArray: string[] = [
    'https://api.iconify.design/devicon:html5.svg',
    'https://api.iconify.design/devicon:css3.svg',
    'https://api.iconify.design/devicon:javascript.svg',
    'https://api.iconify.design/devicon:typescript.svg',
    'https://api.iconify.design/devicon:angular.svg',
    'https://api.iconify.design/devicon:php.svg',
    'https://api.iconify.design/devicon:csharp.svg',
    'https://api.iconify.design/tabler:brand-mysql.svg',
    'https://api.iconify.design/akar-icons:node-fill.svg'
  ]


  // Projetos
  projetos: Project[] = [
    new Project('Orkut Flat!', '/', 'assets/image/project2.png', 'WIP',
     [this.LangsArray[0], this.LangsArray[1], this.LangsArray[2], this.LangsArray[7], this.LangsArray[8]],
     'Projeto baseado no antigo orkut, voltado ao meu aprendizado em redes sociais e estudos individuais sobre banco de dados.'),

    new Project('Moder Music Player', '/', 'assets/image/project3_alt.png',
     'Done', [this.LangsArray[0], this.LangsArray[1], this.LangsArray[2]],
      'Player de musica com design bem parecido com um app nativo, podendo pular entre muscias pausar e visualizar seu BPM.'),

     new Project('TecNews', '/', 'assets/image/project4.png',
     'WIP', [this.LangsArray[0], this.LangsArray[1], this.LangsArray[2], this.LangsArray[7], this.LangsArray[8]],
      'Projeto voltado para catalogação e cadastro de noticias, como um portal de noticias onde as pessaso que se cadastram podem postar uma noticia com foto titulo e texto formatado.'),

     new Project('Genshim Launcher', '/', 'assets/image/project5.png',
     'Done', [this.LangsArray[0], this.LangsArray[1], this.LangsArray[2]],
      'Projeto imitando o estilo de uma atualização do genshim impact, se comportando como o launcher original da hoyoverse.'),

     new Project('Riot Client', '/', 'assets/image/project6.png',
      'Done', [this.LangsArray[0], this.LangsArray[1], this.LangsArray[2]],
       'Projeto front-end que imita as funcionalidades do cliente da riot, sistema de login ficticio e com animações que chegam perto do cliente original')
  ];
}
