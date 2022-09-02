
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Authenticate } from '@rihal/data-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe();
  }
}
