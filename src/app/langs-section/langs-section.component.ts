import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

export class Items {
  imgUrl: string;
  progress: number;
  name: string;

  //Constructor
  constructor(imgUrl: string, progress: number, name: string){
    this.imgUrl = imgUrl;
    this.progress = progress;
    this.name = name;
  }
}

@Component({
  selector: 'app-langs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './langs-section.component.html',
  styleUrl: './langs-section.component.css'
})


export class LangsSectionComponent {
  // Lista de linguagens
  langs: Items[] = [
    new Items('https://api.iconify.design/devicon:html5.svg', 100, 'HTML5'),
    new Items('https://api.iconify.design/devicon:css3.svg', 100, 'CSS3'),
    new Items('https://api.iconify.design/devicon:javascript.svg', 80, 'JavaScript'),
    new Items('https://api.iconify.design/devicon:typescript.svg', 60, 'TypeScript'),
    new Items('https://api.iconify.design/devicon:angular.svg', 30, 'Angular'),
    new Items('https://api.iconify.design/devicon:php.svg', 50, 'PHP'),
    new Items('https://api.iconify.design/devicon:csharp.svg', 70, 'CSharp')
  ]

  // Lista de linguagens
  Databases: Items[] = [
    new Items('https://api.iconify.design/tabler:brand-mysql.svg', 80, 'MySQL'),
    new Items('https://api.iconify.design/simple-icons:microsoftsqlserver.svg', 70, 'MSSQL Server'),
  ]

  constructor(){}
}
