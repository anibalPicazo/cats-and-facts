import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { FactsService } from 'src/app/@core/services/facts/facts.service';
import { FactInterface } from 'src/app/shared/interfaces/cats/fact.interface';
import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let service: FactsService;
  let responseFact: FactInterface;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainViewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FactsService);
    responseFact = { fact: 'Test response random fact', length: 20 };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should service has been called', () => {
    const spy = spyOn(service, 'getRandomFact').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
  it('should call getRandomCat with a specific word and return an observable', () => {
    const getRandomFactSpy = spyOn(service, 'getRandomFact').and.callFake(
      (): Observable<FactInterface> => {
        return of(responseFact);
      }
    );
    component.ngOnInit();

    getRandomFactSpy.and.callFake((): Observable<FactInterface> => {
      return of(responseFact);
    });

    service.getRandomFact().subscribe((fakeResult) => {
      expect(component.word).toEqual('Test');
    });
  });
});
