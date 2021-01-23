import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class CategoriesService {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    constructor(private http: HttpClient) { }
    getCategories(): Observable<[]> {
        return this.http.get<any>("https://api.publicapis.org/categories").pipe(
            tap((_) => this.log("fetched categories")),
            catchError(this.handleError<[]>("getCategories", []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.warn(message)
    }

}
