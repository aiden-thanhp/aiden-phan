import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { CapitalizePipe } from './pipe/capitalize/capitalize.pipe';
import { FooterComponent } from './component/footer/footer.component';
import { AdminNavbarComponent } from './component/admin-navbar/admin-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './page/contact/contact.component';
import { VaultComponent } from './page/vault/vault.component';
import { CorpsComponent } from './page/corps/corps.component';
import { AboutComponent } from './page/about/about.component';
import { AppsComponent } from './page/apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideMenuComponent,
    CapitalizePipe,
    FooterComponent,
    AdminNavbarComponent,
    ContactComponent,
    VaultComponent,
    CorpsComponent,
    AboutComponent,
    AppsComponent
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
