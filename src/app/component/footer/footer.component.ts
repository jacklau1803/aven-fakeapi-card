import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FakeApiService } from './../../service/fake-api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  columns: SafeHtml[] = [];

  constructor(private fakeApiService: FakeApiService, private domSanitizer: DomSanitizer) {
    fakeApiService.getFooterData().subscribe(data => {
      data.forEach(column => {
        let columnHTML = `<h6>${column.name}</h6>\n`;
        column.dataList.forEach(link => {
          columnHTML += `<${link.type} ${link.type === 'a' ? 'href="#"' : ''}>${link.name}</${link.type}>\n`
        });
        this.columns.push(domSanitizer.bypassSecurityTrustHtml(columnHTML));
      })
    });
  }

  ngOnInit(): void {
  }

}
