import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { db } from "src/app/utils/firebase/firebase";
import { query, collection, getDocs, where, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const token: string | null = localStorage.getItem("altoken");
    
      if (!token) {
        return true;
      } else {
        const q = query(collection(db, "r3uDpoVMf-token"), where("token", "==", token));
  
        const querySnapshot: any = await getDocs(q);
        let haveData = false;
        querySnapshot.forEach((doc: any) => {
          if (doc.data().token) {
            haveData = true;
          }
        })
  
        if (haveData) {
          this.router.navigateByUrl("/admin");
          return false;
        }
        else {
          querySnapshot.forEach(async (doc: any) => {
            await deleteDoc(doc(db, "r3uDpoVMf-token", doc.id))
          });
          localStorage.clear();
          return true
        }
      }
  }
  
}
