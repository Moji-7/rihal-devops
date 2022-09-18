import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject, Subscription } from 'rxjs';
import { SharedService } from '../../../shared.service';

import { studentRoutes, reportingRoutes, baseRoutes } from '../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  // styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  changeUrlsubscription: Subscription;
  showMenu = false;
  currentUrl = '';
  isMainRoute = false;

  routes = baseRoutes;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.changeUrlsubscription = this.sharedService
      .getDestUrlEvent()
      .subscribe((currentUrl) => {
        this.menuChanged(currentUrl);
      });
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url.includes('student'))
          this.menuChanged('student');
        else if ((event as NavigationEnd).url.includes('admin'))
          this.menuChanged('admin');
        else this.isMainRoute = true;
      });
  }

  menuChanged(currentUrl: string) {
    this.currentUrl = currentUrl;
    if (currentUrl === 'student') this.routes = studentRoutes;
    else if (currentUrl === 'admin') this.routes = reportingRoutes;
  }
  navigate(item: any) {
    this.router.navigate([
      this.currentUrl + '/' + item.path,
      { by: item?.param },
    ]);
  }
  navigateHome(item: any) {
    localStorage.clear();
    this.routes = [];
    this.sharedService.sendDestUrlEvent('');
    this.router.navigate(['']);
  }
}
