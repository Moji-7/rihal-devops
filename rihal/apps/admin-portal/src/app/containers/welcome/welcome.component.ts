import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@rihal/layout';



@Component({
  selector: 'rihal-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router:Router,private sharedService:SharedService) {}

  ngOnInit(): void {}
  navigate(destUri:string){
    localStorage.clear();
    this.sharedService.sendDestUrlEvent(destUri);
    this.router.navigate([destUri]);
 }
}
