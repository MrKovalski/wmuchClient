import { HttpClient, HttpParams, HttpErrorResponse } from  '@angular/common/http';
import { HttpHeaders } from  '@angular/common/http';
import { Router } from  '@angular/router';
import { Observable, throwError } from  'rxjs';
import { catchError, map, tap } from  'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from  '../../../../environments/environment';
import { User } from '../user';
import { Hour } from '../hour';
import { HttpHandleErrorService, HandleError } from  '../../../pages/shared/_services/http-handle-error.service';


const httpOptions  = {
  headers: new  HttpHeaders({
          'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private  readonly  apiUrl  =  environment.apiUrl;
  private  handleError:  HandleError;

  constructor(
    private http:  HttpClient,
    httpErrorHandler:  HttpHandleErrorService ) {
    this.handleError  =
httpErrorHandler.createHandleError('BuildersService');
}

  // /** GET user from user endpoint */
  // getUser():  Observable<User> {
  //   return  this.http.get<User>(this.apiUrl + '/user').pipe(
  //     catchError(this.handleError('getUser', {}))
  //   );
  // }

  /** GET hours from hours endpoint */
  getHours():  Observable<Hour> {
    return  this.http.get<Hour>(this.apiUrl + '/hours').pipe(
      catchError(this.handleError('getHours', {}))
    );
  }

  /** POST hour to /hour endpoint*/
  addHour(hour: Hour): Observable<Hour>{
    return this.http.post<Hour>(this.apiUrl + `/hours`, hour).pipe(
      catchError(this.handleError('addHour', hour))
    )
  }

  /** GET hour by id from /hours/{id} */
  getHour(id: number): Observable<Hour> {
    return this.http.get<Hour>(this.apiUrl + '/hours/${id}'). pipe(
      catchError(this.handleError('getHour'))
    );
  }

  /** PUT hour by id to /hours/{hour} */
  updateHour(hour: Hour, id: number): Observable<Hour> {
    return this.http.put<Hour>(this.apiUrl + '/hours/${id}', hour).pipe(
      catchError(this.handleError('updateHour', hour))
    );
  }







}


