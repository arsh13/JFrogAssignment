import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

/**
 * @whatItDoes Intercets each and every Http Request to display errors if any
 */
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(

            tap(evt => {
                console.log('Event: ', evt);
                if (evt instanceof HttpResponse) {
                    this.toasterService.success('Data fetched from API', 'Success', { positionClass: 'toast-bottom-center' });
                }
            }),
            catchError((err: any) => {
                console.log('Error: ', err);
                if (err instanceof HttpErrorResponse) {
                    try {
                        this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
                    } catch (e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                }
                return of(err);
            }));

    }

}
