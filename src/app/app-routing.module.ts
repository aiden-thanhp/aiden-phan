import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { AppsComponent } from './page/apps/apps.component';
import { ContactComponent } from './page/contact/contact.component';
import { CorpsComponent } from './page/corps/corps.component';
import { HomeComponent } from './page/home/home.component';
import { VaultComponent } from './page/vault/vault.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "apps", component: AppsComponent },
  { path: "contact", component: ContactComponent },
  { path: "corps", component: CorpsComponent },
  { path: "vault", component: VaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
