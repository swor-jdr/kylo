import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store, Select } from '@ngxs/store'
import { AuthState } from './state/auth.state'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = this.store.selectOnce(AuthState.token);

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
