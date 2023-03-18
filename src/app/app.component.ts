import { Component, OnInit } from '@angular/core';
import { MenuService } from './service/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aiden-phan';
  admin: boolean = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    if (window.location.href.includes("admin")) {
      this.admin = true;
    }

    this.menuService.getMenu()
  }
}
