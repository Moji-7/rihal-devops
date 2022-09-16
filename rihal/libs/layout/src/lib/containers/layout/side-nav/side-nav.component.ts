import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { SharedService } from '../../../shared.service';

import { studentRoutes, reportingRoutes } from '../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  // styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  changeUrlsubscription: Subscription;
  showMenu = false;
  currentUrl=""
  routes: any[] = [];
  constructor(private sharedService: SharedService, private router: Router) {
    this.changeUrlsubscription = this.sharedService
      .getDestUrlEvent()
      .subscribe((currentUrl) => {
        this.menuChanged(currentUrl);
      });
  }

  menuChanged(currentUrl:string) {
    this.currentUrl=currentUrl
    if (currentUrl==="student") this.routes = studentRoutes;
    else if (currentUrl=== "admin") this.routes = reportingRoutes;
  }
  navigate(item:any){
    this.router.navigate([this.currentUrl + '/' + item.path, { by: item?.param }]);

  }
  navigateHome(item:any){
    localStorage.clear();
    this.routes = [];
    this.sharedService.sendDestUrlEvent('');
    this.router.navigate(['']);

  }
}
