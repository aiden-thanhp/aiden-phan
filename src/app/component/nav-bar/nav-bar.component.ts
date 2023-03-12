import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  onOpenSideMenu() {
    document.getElementById("side-menu-opener")?.classList.toggle("menu-open");
    document.getElementById("body-container")?.classList.toggle("menu-open");
  }
}
