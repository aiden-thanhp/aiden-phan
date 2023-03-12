import { Injectable } from '@angular/core';

type Menu = {
  name: string,
  link: string,
}

type Social = {
  name: string,
  link: string,
  icon: string,
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  menu: Array<Menu> = [
    {
      name: "About",
      link: ""
    },
    {
      name: "Aiden's Corps",
      link: ""
    },
    {
      name: "Aiden's Vault",
      link: ""
    },
    {
      name: "Contact",
      link: ""
    }
  ];

  socials: Array<Social> = [
    {
      name: "facebook",
      link: "",
      icon: "/assets/socials/facebook.svg"
    },
    {
      name: "instagram",
      link: "",
      icon: "/assets/socials/instagram.svg"
    },
    {
      name: "twitter",
      link: "",
      icon: "/assets/socials/twitter.svg"
    },
    {
      name: "youtube",
      link: "",
      icon: "/assets/socials/youtube.svg"
    },
    {
      name: "linkedin",
      link: "",
      icon: "/assets/socials/linkedin.svg"
    },
    {
      name: "tiktok",
      link: "",
      icon: "/assets/socials/tiktok.svg"
    },
    {
      name: "github",
      link: "",
      icon: "/assets/socials/github.svg"
    }
  ]
}
