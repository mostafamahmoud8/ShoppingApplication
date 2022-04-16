import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authservice:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
       const request = req.clone({params:new HttpParams().set("auth",this.authservice.token)})

       return next.handle(request);
    }
}