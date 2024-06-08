
import { environment as env } from "src/environments/environment"

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class interceptorPutParams implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const urlClonada = req.clone({
      setParams: {
        api_key: env.apiKey,
        language: 'es-ES'
      }
    })
    return next.handle(urlClonada);

  }
}
