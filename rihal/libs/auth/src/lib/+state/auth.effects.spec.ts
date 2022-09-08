import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions: Observable<Action>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.initAuth() });

      const expected = hot('-a-|', {
        a: AuthActions.loadAuthSuccess({ auth: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
