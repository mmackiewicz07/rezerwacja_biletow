import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PlaceService {
    selectPlace(table: boolean[] | undefined): Observable<any> {
        return this.http.post('/api/putPlaces', {data: table});
    }

    constructor(private http: HttpClient) {};
}