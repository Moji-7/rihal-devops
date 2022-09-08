import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, Output, EventEmitter, HostBinding, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  message!: string;
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);
  constructor( private readonly router: Router,private overlay: OverlayContainer) {
    //this.message = this.getMessage();
  }

  ngOnInit() {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.className = darkMode ? darkClassName : '';
    //   if (darkMode) {
    //     this.viewContainerRef.
    //     this.overlay.getContainerElement().getRootElement.classList.add(darkClassName);
    //   } else {
    //     this.overlay.getContainerElement().classList.remove(darkClassName);
    //   }
    // });
  }

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
