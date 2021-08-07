import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterColumn } from '../model/FooterColumn';
import { Link } from '../model/Link';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  postData: Post[];
  mainNavData: Link[];
  sideNavData: Link[];
  footerData: FooterColumn[];

  constructor() {
    this.postData = [
      {
        id: 0,
        title: `Home Equity Line of Credit (HELOC) Card: What is It?`,
        description: `Are you looking to free up some cash? If so, you have probably thought about getting a second mortgage in...`,
        img: `/assets/images/pic1.jpeg`
      },
      {
        id: 1,
        title: `Home Equity Line of Credit (HELOC) Card: How it Works`,
        description: `Now that you understand what a HELOC Card is, let’s dive into how it works. This article also explains...`,
        img: `/assets/images/pic2.jpeg`
      }
    ];

    this.mainNavData = [
      {
        name: "Card",
        type: "a"
      },
      {
        name: "App",
        type: "a"
      },
      {
        name: "Resources",
        type: "a"
      }
    ];

    this.sideNavData = [
      {
        name: "Sign In",
        type: "a"
      },
      {
        name: "Check Offers",
        type: "button"
      }
    ];

    this.footerData = [
      {
        name: "Company",
        dataList: [
          {
            name: "About Us",
            type: "a"
          },
          {
            name: "Support",
            type: "a"
          },
          {
            name: "Contact Us",
            type: "a"
          }
        ]
      },
      {
        name: "Resources",
        dataList: [
          {
            name: "Privacy",
            type: "a"
          },
          {
            name: "Terms of Service",
            type: "a"
          },
          {
            name: "Waitlist Terms",
            type: "a"
          },
          {
            name: "Credit Education",
            type: "a"
          }
        ]
      }
    ];
  }

  getPostData(): Observable<Post[]> {
    return of(this.postData);
  }

  getMainNavData(): Observable<Link[]> {
    return of(this.mainNavData);
  }

  getSideNavData(): Observable<Link[]> {
    return of(this.sideNavData);
  }

  getFooterData(): Observable<FooterColumn[]> {
    return of(this.footerData);
  }

}
