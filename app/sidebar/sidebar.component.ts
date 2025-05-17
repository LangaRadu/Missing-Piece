import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() themes: string[] = [];
  @Input() activeThemeIndex: number = 0; // Marked as @Input()


  setActiveTheme(index: number) {
    this.activeThemeIndex = index;
  }
}
