import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  titlle = "material Icon";
  notification = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
