import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aiden-phan';
  admin: boolean = false;

  ngOnInit(): void {
    if (window.location.href.includes("admin")) {
      this.admin = true;
    }
  }
}
