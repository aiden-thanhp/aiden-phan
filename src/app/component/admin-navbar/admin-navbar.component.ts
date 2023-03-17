import { Component, OnInit } from '@angular/core';

type menu = {
  name: string
}

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  adminLogin: boolean = false;

  menus: Array<menu> = [
    {
      name: "Menu"
    },
    {
      name: "Vault"
    },
    {
      name: "Corps"
    },
    {
      name: "Blog"
    }
  ]

  ngOnInit(): void {
    if (localStorage.getItem("altoken")) {
      this.adminLogin = true;
    }
  }
}
