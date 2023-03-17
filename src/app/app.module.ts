import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { CapitalizePipe } from './pipe/capitalize/capitalize.pipe';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './page/admin/admin.component';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';
import { AdminNavbarComponent } from './component/admin-navbar/admin-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideMenuComponent,
    CapitalizePipe,
    FooterComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
