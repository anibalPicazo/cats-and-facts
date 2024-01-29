import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsService } from 'src/app/@core/services/cats/cats.service';
import { environment } from 'src/environments/environment';
import { CatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;
  let service: CatsService;
  let url: string;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CatsService);
    url = environment.URL_CATS;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should service has been called with word', () => {
    component.word = 'test';
    const spy = spyOn(service, 'getRandomCat').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.img).toEqual(`${url}/test`);
  });
  it('should service has been called with default value', () => {
    const spy = spyOn(service, 'getRandomCat').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.img).toEqual(`${url}/Hello`);
  });
});
