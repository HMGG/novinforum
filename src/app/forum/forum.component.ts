import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  forums = [
    {
      title: "Forum1"
    },
    {
      title: "Forum2"
    },
    {
      title: "Forum3"
    },
    {
      title: "Forum4"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
