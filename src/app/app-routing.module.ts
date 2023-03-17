import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginGuard } from './guard/admin-login.guard';
import { AdminGuard } from './guard/admin.guard';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin",
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: AdminComponent, canActivate: [AdminGuard] },
      { path: "login", component: AdminLoginComponent, canActivate: [AdminLoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
