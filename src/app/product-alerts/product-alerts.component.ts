import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor() { 
    this.notify;
  }
}
