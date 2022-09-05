import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  message!: string;

  constructor( private readonly router: Router) {
    //this.message = this.getMessage();
  }

  ngOnInit() {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  getMessage() {
  //  return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  onLoggedout() {
    //localStorage.removeItem('isLoggedin');
   // this.router.navigate(['/login']);
     // this.authService.logout();
     // this.message = this.getMessage();
     // this.router.navigate(['/login']);
  }
}
