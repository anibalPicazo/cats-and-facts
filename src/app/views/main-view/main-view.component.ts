import { Component } from '@angular/core';
import { FactsService } from 'src/app/@core/services/facts/facts.service';
import { FactInterface } from 'src/app/shared/interfaces/cats/fact.interface';

@Component({
  selector: 'app-root',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent {
  word: string = '';
  constructor(private factService: FactsService) {}
  ngOnInit(): void {
    this.factService.getRandomFact().subscribe((res: FactInterface) => {
      this.word = res.fact.split(' ')[0];
    });
  }
}
