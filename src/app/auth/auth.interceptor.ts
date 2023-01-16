import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
// import { UsersApiService } from 'src/app/api/users-api.service';
// import { removeItemLocalStorage, setItemLocalStorage } from 'src/app/shared/utils/utils';
// import { environment } from 'src/environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshingToken = false;

  constructor(
    private readonly router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);

    // Gestione di access token e refresh token tramite interceptor
    // if (request.url.includes(`login`) || request.url.includes('forgot-password') || request.url.includes('logout') || request.url.includes('news')) return next.handle(request);
    // const token = this.usersApiService.getTokenFromLocalStorage();
    // request = request.clone({
    //   url: request.url,
    //   setHeaders: {
    //     Authorization: `Bearer ${token.access_token}`,
    //   },
    // });
    // return next.handle(request).pipe(catchError((error) => this.refreshNewToken(next, request, error)));
  }

  // private refreshNewToken(next: HttpHandler, request: HttpRequest<any>, error: any): Observable<HttpEvent<any>> {
  //   const token = this.usersApiService.getTokenFromLocalStorage();
  //   if (error.status === 401 || error.status === 403) {
  //     return this.usersApiService.refreshToken('refresh_token', token.refresh_token).pipe(
  //       map((token: any) => {
  //         console.log(token);
  //         localStorage.removeItem('token');
  //         setItemLocalStorage('token', { access_token: token.access_token, refresh_token: token.refresh_token, expiresIn: token.expires_in });
  //         request = request.clone({
  //           url: request.url,
  //           setHeaders: {
  //             Authorization: `Bearer ${token.access_token}`,
  //           },
  //         });
  //         return request;
  //       }),
  //       switchMap((request) => next.handle(request).pipe(catchError((error) => {
  //         this.router.navigate(['auth', 'login']);
  //         this.usersApiService.logout();
  //         return next.handle(request);
  //       })))
  //     );
  //   }
  //   this.router.navigate(['auth', 'login']);
  //   this.usersApiService.logout();
  //   return next.handle(request);
  // }


  // Esempio di chiamate asincrone gestite con rxjs

  // --Prima chiamata effettuata con pipe e catchError, finche non fa subscribe non popola this.users
  // getUsers() {
  //   return this.userService.getUserList().pipe(map((usersResp) => {
  //     this.users = usersResp.users;
  //   }), catchError((error) => {
  //     this.toastr.danger(null, 'Qualcosa è andato storto, riprova più tardi', { preventDuplicates: true });
  //     return error;
  //   }));
  // }

  // --Seconda chiamata dove chiama gli incentivi, ho bisogno di avere gia users al suo interno percio prima di fare subscribe fa una pipe dove fa un switchMap() e al suo interno chiama getUsers(). Nel subscribe avro users e incentivi
  //   this.incentiveService.getIncentiveList(this.pagination.itemsPerPage, this.pagination.page, this.fulltextString)
  //    .pipe(switchMap((response: any) =>
  //      this.getUsers().pipe(map(() => response))
  //    )).subscribe((res: any) => {})
}
