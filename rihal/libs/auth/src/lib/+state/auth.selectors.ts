import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState, authAdapter } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: AuthState) => state.loaded
);

export const getAuthError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);

export const getAllAuth = createSelector(getAuthState, (state: AuthState) =>
  selectAll(state)
);

export const getAuthEntities = createSelector(
  getAuthState,
  (state: AuthState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAuthState,
  (state: AuthState) => state.selectedId
);

export const getSelected = createSelector(
  getAuthEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
