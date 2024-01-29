import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FactInterface } from 'src/app/shared/interfaces/cats/fact.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  URL: string = environment.URL_FACTS;
  constructor(private http: HttpClient) {}

  getRandomFact() {
    return this.http.get<FactInterface>(`${this.URL}`);
  }
}
