import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

type Menu = {
  name: string,
  link: string,
}

type Social = {
  name: string,
  link: string,
  icon: string,
}

const CONFIG = {
  space: "c1bcj5kzyayv",
  accessToken: "fbM5Am6OK7xyDP331rnC4mJyZhSN2m60Cot4wNzR9C8",
  contentTypeIds: {
    menu: "menu-91sHGodiw30"
  }
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  })
  constructor() { }

  menu: Array<Menu> = [];

  getMenu() {
    this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.menu
    })).then(res => {
      res.items.forEach((item: any) => {
        this.menu.push({ ...item.fields })
      })
    })
  }

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
