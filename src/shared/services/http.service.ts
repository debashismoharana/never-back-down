import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    get(url: string): Observable<object> {
        return new Observable((observer) => {
            this.http.get(url, {})
                .subscribe(data => {
                    observer.next(data);
                }, error => {
                    observer.error(error);
                });
        });
    }

}
