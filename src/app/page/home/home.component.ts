import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostListener("window:scroll", ['$event']) onScroll(event: Event) {
    const scrolltotop = document.scrollingElement!.scrollTop;
    const target = document.getElementById("intro");
    const factor = 0.7;
    const yvalue = scrolltotop * factor;
    if (target) target.style.backgroundPosition = "center " + yvalue + "px";
  }
}
