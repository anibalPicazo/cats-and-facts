import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  URL: string = environment.URL_CATS;
  constructor() {}

  getRandomCat(word: string): string {
    return `${this.URL}/${word}`;
  }
}
