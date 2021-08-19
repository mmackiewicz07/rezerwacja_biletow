import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ListResponse } from "src/core/commons/list/list.model";
import { Seance } from "./seances.model";

@Injectable()
export class SeanceService {
    getSeanceList(): Observable<ListResponse<Seance[]>> {
        return this.http.get<ListResponse<Seance[]>>('/api/getSeances');
    }

    constructor(private http: HttpClient) {};
}