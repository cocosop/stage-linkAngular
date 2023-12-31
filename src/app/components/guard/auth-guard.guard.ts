import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './../pages/authService/auth-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServiceService);
  const router = inject(Router);

  let user = localStorage.getItem('usertype');


    if (!auth.Authenticated()) {
      router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }




  return true;
};
