import { Component, Input, OnInit } from '@angular/core';
import { CatsService } from 'src/app/@core/services/cats/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent implements OnInit {
  img: string = '';
  @Input() word: string = 'Hello';
  constructor(private catService: CatsService) {}
  ngOnInit(): void {
    this.img = this.catService.getRandomCat(this.word);
  }
}
