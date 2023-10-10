import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://localhost:40443/api/countries'


  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getCountry(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  postCountry(countryData: any): Observable<any> {
    return this.http.post<any>(this.url, countryData);
  }

  putCountry(id: any, countryData: any): Observable<any> {

    return this.http.put<any>(`${this.url}/${id}`, countryData);
  }

  deleteCountry(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
