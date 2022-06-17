import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login Component email validation.', (() => {
    let fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      var re = /\S+@\S+\.\S+/;
        let input = fixture.debugElement.query(By.css('.emailid'));
        let el = input.nativeElement;
        expect(el.value).toMatch(re);
    })
  );

  it('Login Component email validation.', (() => {
    let fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
        let input = fixture.debugElement.query(By.css('.emailid'));
        let el = input.nativeElement;
        expect(el.value.length).toBeGreaterThanOrEqual(8);
    })
  );

  it('Password to minimum of 8 characters', (() => {
    let fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
        let pwd = fixture.debugElement.query(By.css('.password'));
        let el = pwd.nativeElement;
        expect(el.value.length).toBeGreaterThanOrEqual(8);
    })
  );

});
