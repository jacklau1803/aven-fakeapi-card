import { Link } from './../../model/Link';
import { Observable } from 'rxjs';
import { FakeApiService } from './../../service/fake-api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isMobile } from 'src/app/utils/isMobile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isMobile = isMobile;
  showNav = false;
  mainNavContent: SafeHtml;
  sideNavContent: SafeHtml;
  mobileNavContent: SafeHtml;

  constructor(private fakeApiService: FakeApiService, private domSanitizer: DomSanitizer) {
    let main = ``;
    let side = ``;
    fakeApiService.getMainNavData().subscribe(data => {
      data.forEach(link => {
        main += `<${link.type} ${link.type === 'a' ? 'href="#"' : ''}>${link.name}</${link.type}>\n`
      });
    });
    fakeApiService.getSideNavData().subscribe(data => {
      data.forEach(link => {
        side += `<${link.type} ${link.type === 'a' ? 'href="#"' : ''}>${link.name}</${link.type}>\n`
      });
    });
    this.mainNavContent = domSanitizer.bypassSecurityTrustHtml(main);
    this.sideNavContent = domSanitizer.bypassSecurityTrustHtml(side);
    this.mobileNavContent = domSanitizer.bypassSecurityTrustHtml(side + main)
  }

  ngOnInit(): void {
  }

  toggleShowNav() {
    this.showNav = !this.showNav;
  }
}
