import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { db } from "src/app/utils/firebase/firebase";
import { query, collection, getDocs, where, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token: string | null = localStorage.getItem("altoken");
    
    if (!token) {
      this.router.navigateByUrl("/admin/login");
      return false
    } else {
      const q = query(collection(db, "r3uDpoVMf-token"), where("token", "==", token));

      const querySnapshot: any = await getDocs(q);
      let haveData = false;
      querySnapshot.forEach((doc: any) => {
        if (doc.data().token) {
          haveData = true;
        }
      })

      if (haveData) return true;
      else {
        querySnapshot.forEach(async (doc: any) => {
          await deleteDoc(doc(db, "r3uDpoVMf-token", doc.id))
        });
        localStorage.clear();
        this.router.navigateByUrl("/admin/login");
        return false
      }
    }
  }
  
}
