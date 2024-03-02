import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode/dark-mode.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  // Inicializujeme darkModeState na false
  darkModeState = false;

  constructor(private darkModeService: DarkModeService) {
    // Pri inicializácii komponentu sa zaregistrujeme na observable
    // a aktualizujeme stav dark mode
    this.darkModeService.getDarkModeState().subscribe(state => {
      this.darkModeState = state;
    });
  }

  // Metóda na zmenu stavu isExpanded
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

