import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SearchService } from '../pages/search-tickets/search.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    intercept(req, next) {
        let authService = this.injector.get(SearchService);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `${authService.getToken()}`
            }
        })
        return next.handle(tokenizedReq);

    }
}
