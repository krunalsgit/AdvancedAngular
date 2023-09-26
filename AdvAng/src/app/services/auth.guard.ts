import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let userRole = "admin";
  if (userRole == "admin") {
    return true;
  } else {
    return false;
  }
};
