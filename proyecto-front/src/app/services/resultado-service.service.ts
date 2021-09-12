import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoServiceService {

  private API_SERVER = 'http://localhost:8441/getAnalisisAW'

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }

  public postUrl(url: string): Observable<any> {
    return this.http.post(this.API_SERVER, url);
  }

}
