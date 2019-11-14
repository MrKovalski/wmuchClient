import { HttpClient, HttpParams, HttpErrorResponse } from  '@angular/common/http';
import { HttpHeaders } from  '@angular/common/http';
import { Router } from  '@angular/router';
import { Observable, throwError } from  'rxjs';
import { catchError, map, tap } from  'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from  '../../../../environments/environment';
import { User } from '../../profil/profil/user';
import { HttpHandleErrorService, HandleError } from  '../../../pages/shared/_services/http-handle-error.service';



@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  
  private  readonly  apiUrl  =  environment.apiUrl;
  private  userUrl  =  this.apiUrl  +  '/user';
  private  handleError:  HandleError;
  constructor(
    private http:  HttpClient,
    httpErrorHandler:  HttpHandleErrorService,
  ) {
    this.handleError  =
httpErrorHandler.createHandleError('BuildersService');
  }

  /** GET user from user endpoint */
  getUser():  Observable<User> {
    return  this.http.get<User>(this.userUrl).pipe(
      catchError(this.handleError('getUser', {}))
    );
  }

  /** PUT user to user endpoint*/
  updateUser (user: User): Observable<User> {
    return this.http.put<User>(this.userUrl, user).pipe(
      catchError(this.handleError('updateUser', user))
    );
  }

}
