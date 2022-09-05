import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rihal-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  navigate(destUri:string){
    localStorage.clear();
    this.router.navigate([destUri]);
 }
}
