import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { db } from "src/app/utils/firebase/firebase";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import * as bcrypt from "bcryptjs";

const generateToken = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={[]}|\?/><,~`'
  let result = "";

  for (let i = 0; i < 35; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  result += "."

  for (let i = 0; i < 14; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  result += "."

  for (let i = 0; i < 27; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  error: boolean = false;
  success: boolean = false;
  loginForm = new FormBuilder().group({
    username: '',
    password: ''
  });

  async onLogin(event: Event) {
    event.preventDefault();

    if (!this.loginForm.controls.password.errors && !this.loginForm.controls.username.errors) {
      const { username, password } = this.loginForm.getRawValue();
      const q = query(collection(db, "d8awhoas93-admin"));
      const querySnapshot: any = await getDocs(q);
      querySnapshot.forEach(async (doc: any) => {
        const admin_password: string = doc.data().password;
        const admin_username: string = doc.data().username;

        if (admin_username != username) this.error = true;
        else {
          const match: boolean = await bcrypt.compare(password!, admin_password);
          if (!match) this.error = true;
          else {
            setTimeout(async () => {
              const token = generateToken();
              const tokenRef = collection(db, "r3uDpoVMf-token");
              await addDoc(tokenRef, {
                token,
                createdAt: Date.now()
              });
              localStorage.setItem("altoken", token)
              this.error = false;
              this.success = true;
            }, 2000)
          }
        }
      })
    } else {
      alert("Please Enter All Inputs")
    }
  }
}
