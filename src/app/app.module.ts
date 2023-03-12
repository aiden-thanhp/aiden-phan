import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { CapitalizePipe } from './pipe/capitalize/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideMenuComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
