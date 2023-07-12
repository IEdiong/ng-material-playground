import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class UserService {
  private url = 'https://angular-material-api.azurewebsites.net/users';
  private _users: BehaviorSubject<User[]>;
  private _dataStore: {
    users: User[];
  };

  constructor(private http: HttpClient) {
    this._dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  //! Method to handle request errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Failed to retrieve data from Azure'));
  }

  private getUsers(): Observable<User[]> {
    const options = {
      observe: 'body' as const,
      responseType: 'json' as const,
    };

    return this.http
      .get<User[]>(this.url, options)
      .pipe(catchError(this.handleError));
    // return this.http.get<User[]>(url).subscribe(
    //   (data) => (this._dataStore.users = data),
    //   (error) => console.log('Failed to retrieve data from Azure', error)
    // );
  }

  public loadAll() {
    return this.getUsers().subscribe((data: User[]) => {
      this._dataStore.users = data;
      this._users.next(Object.assign({}, this._dataStore).users);
    });
  }
}
