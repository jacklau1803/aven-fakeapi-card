import { Observable } from 'rxjs';
import { FakeApiService } from './../../service/fake-api.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data$: Observable<Post[]>;

  constructor(private fakeApiService: FakeApiService) {
    this.data$ = this.fakeApiService.getPostData();
  }

  ngOnInit(): void {
  }

}
