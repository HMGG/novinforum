import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [
    {
      image: "assets/angular.png",
      title: "News1"
    },
    {
      image: "assets/angular.png",
      title: "News2"
    },
    {
      image: "assets/angular.png",
      title: "News3"
    },
    {
      image: "assets/angular.png",
      title: "News4"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }


}
