import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { By } from '@angular/platform-browser';


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Movie List Generated', (() => {
    let fixture = TestBed.createComponent(MoviesComponent);
      fixture.detectChanges();
        let input = fixture.debugElement.query(By.css('.movie_list'));
        let el = input.nativeElement;
        expect(el).toBeTruthy();
    })
  );
});
