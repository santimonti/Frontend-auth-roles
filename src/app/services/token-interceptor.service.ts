import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: any, next: any) {
    const tokenReq = req.clone({
      setHeaders: {
        token: `${this.authService.getToken()} `,
      },
    });

    return next.handle(tokenReq);
  }
}
