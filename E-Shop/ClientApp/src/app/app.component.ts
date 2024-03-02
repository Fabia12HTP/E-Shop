import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  darkModeState = false;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkModeService.getDarkModeState().subscribe(state => {
      this.darkModeState = state;
    });
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
