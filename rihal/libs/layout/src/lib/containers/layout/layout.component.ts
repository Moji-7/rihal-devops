

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@rihal/auth'
import { Observable } from 'rxjs';
import { User } from '@rihal/data-models';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  user$!: Observable<User> ;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}