import { CanActivateChildFn } from '@angular/router';

export const authchildGuard: CanActivateChildFn = (childRoute, state) => {
  let user = "user";
  if (user == 'user') {
    return true;
  } else {
    alert("can't access");
    return false;
  }
};

