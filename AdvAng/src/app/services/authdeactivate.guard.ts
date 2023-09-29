import { CanDeactivateFn } from '@angular/router';

export const authdeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  let confirm = window.confirm('Are you sure to leave this page?');
  if (confirm == true) {
    return true;
  } else {
    return false;
  }
};
