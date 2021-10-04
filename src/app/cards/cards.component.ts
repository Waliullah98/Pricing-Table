import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input('item1') item1:any;
@Input('item2') item2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
