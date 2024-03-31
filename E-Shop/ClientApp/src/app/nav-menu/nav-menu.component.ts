import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode/dark-mode.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  darkModeState = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.getDarkModeState().subscribe(state => {
      this.darkModeState = state;
    });
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

