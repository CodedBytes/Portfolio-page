import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainbannerComponent } from "./mainbanner/mainbanner.component";
import { LangsSectionComponent } from "./langs-section/langs-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";
import { TotopFunctionComponent } from "./totop-function/totop-function.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, MainbannerComponent, LangsSectionComponent, ProjectsSectionComponent, ContactSectionComponent, FooterSectionComponent, TotopFunctionComponent]
})
export class AppComponent {
}
