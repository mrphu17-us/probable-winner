import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    if (authToken != null) {
      req = req.clone({
        setHeaders: {
          Authorization: authToken,
          'content-type': 'application/json',
        },
      });
    }
    return next.handle(req);
  }
}
