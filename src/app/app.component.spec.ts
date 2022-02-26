import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

describe('AppComponent', () => {
  let titleServiceSpy: jasmine.SpyObj<Title>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Title', ['setTitle']);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LandingComponent
      ],
      providers: [
        { provide: Title, useValue: spy }
      ]
    }).compileComponents();

    titleServiceSpy = TestBed.inject(Title) as jasmine.SpyObj<Title>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should set the correct title using the Title service`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(titleServiceSpy.setTitle).toHaveBeenCalledOnceWith('Valentina Catana - Certified Translator, Montreal');
  });
});
