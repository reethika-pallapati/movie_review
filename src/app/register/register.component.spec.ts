import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('register componet, first_name to be greeater than 3', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.fname'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
      expect(el.value.length).toBeGreaterThan(3);
  })
);
it('register componet, last_name to be greeater than 3', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    
      let input = fixture.debugElement.query(By.css('.lname'));
      let el = input.nativeElement;
      expect(el.value).not.toBeNull();
  })
);

it('register component check email regular expression', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    var re = /\S+@\S+\.\S+/;
      let input = fixture.debugElement.query(By.css('.email'));
      let el = input.nativeElement;
      expect(el.value).toMatch(re);
  })
);

it('register component password special symbol, upper case, lower care and digit in password.', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
      var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      let input = fixture.debugElement.query(By.css('.password'));
      let el = input.nativeElement;
      expect(el.value).toMatch(regularExpression);
  })
);

it('register componet compare password and confirm password', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    
      let input1 = fixture.debugElement.query(By.css('.cpassword'));
      let input2 = fixture.debugElement.query(By.css('.password'));
      let e1 = input1.nativeElement;
      let e2 = input2.nativeElement;
      expect(e1.value == e2.value ).toBe(true);
  })
);

it('register component check min age', (() => {
  let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
      let input = fixture.debugElement.query(By.css('.date'));
      let el = input.nativeElement;
      expect(el.value.length).toBeGreaterThan(18);
  }) );
});
