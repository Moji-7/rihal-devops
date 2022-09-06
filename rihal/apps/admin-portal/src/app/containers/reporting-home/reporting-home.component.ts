import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rihal-reporting-home',
  templateUrl: './reporting-home.component.html',
  styleUrls: ['./reporting-home.component.scss'],
})
export class ReportingHomeComponent implements OnInit {
  constructor() {}
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];


  ngOnInit(): void {}
}
