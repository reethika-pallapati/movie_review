import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';
import { By } from '@angular/platform-browser';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Review Copmponent validating name input field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.name'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
      expect(el.value.length).toBeGreaterThanOrEqual(4);
    })
  );

  it('Review Copmponent validating gerner field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.gerner'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
      expect(el.value.length).toBeGreaterThanOrEqual(4);
    })
  );

  it('Review Copmponent validating cast input field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.cast'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
      expect(el.value.length).toBeGreaterThanOrEqual(4);
    })
  );

  it('Review Copmponent validating type select field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.type'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
    })
  );

  it('Review Copmponent validating rating select field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.rating'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
    })
  );

  it('Review Copmponent validating rating select field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.rating'));
      let el = input.nativeElement;
      expect(el.value).toBeGreaterThanOrEqual(1);
      expect(el.value).toBeLessThanOrEqual(5);
    })
  );

  it('Review Copmponent validating review input field', (() => {
    let fixture = TestBed.createComponent(ReviewComponent);
      fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.review'));
      let el = input.nativeElement;
      expect(el.value.length).toBeGreaterThanOrEqual(10);
    })
  );

});
