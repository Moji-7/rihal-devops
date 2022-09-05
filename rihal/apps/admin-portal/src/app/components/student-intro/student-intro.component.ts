import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rihal-student-intro',
  templateUrl: './student-intro.component.html',
  styleUrls: ['./student-intro.component.scss'],
})
export class StudentIntroComponent implements OnInit {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  constructor() {}


  ngOnInit(): void {}
}
