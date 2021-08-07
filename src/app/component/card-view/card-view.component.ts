import { Post } from './../../model/Post';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
