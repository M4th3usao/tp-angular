import { Injectable } from "@angular/core";
import { Discipline } from "../components/Discipline";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DisciplineService {
    private apiUrl = 'http://localhost:3000/disciplinas'


constructor(private http: HttpClient) { }


getAll(): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(this.apiUrl)//isso é um padrão do angular, pois ele precisa observar se o arry chega na requisição da api.
  }

}