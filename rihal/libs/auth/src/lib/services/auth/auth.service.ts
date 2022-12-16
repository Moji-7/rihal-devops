import { Injectable } from '@angular/core';
import { Authenticate, User } from '@rihal/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
​
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null!);
  user$ = this.userSubject$.asObservable();
​
  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }
​
  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
	//TODO: must read from env.
      'http://localhost:3000/auth',
      authenticate
    ).pipe(tap((user: User) => {
        console.log("my accesstoken: "+JSON.stringify("Bearer "+user.accessToken))
        this.userSubject$.next(user);
        localStorage.setItem('Authorization', JSON.stringify("Bearer "+user.accessToken));
    }));
  }
​
}
