import { CanActivateChildFn } from '@angular/router';

export const authchildGuard: CanActivateChildFn = (childRoute, state) => {
  let user = "user";
  if (user == 'admin') {
    return true;
  } else {
    alert("only admin can access");
    return false;
  }
};

