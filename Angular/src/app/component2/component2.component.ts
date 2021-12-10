import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  notifications: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.notifications.push(`You've earned gold at the Farm`);
  }

}
