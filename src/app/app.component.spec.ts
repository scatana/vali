import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';

describe('AppComponent', () => {
  let titleServiceSpy: jasmine.SpyObj<Title>;
  let metaServiceSpy: jasmine.SpyObj<Meta>;

  beforeEach(async () => {
    const titleSpy = jasmine.createSpyObj('Title', ['setTitle']);
    const metaSpy = jasmine.createSpyObj('Meta', ['addTag']);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        ServicesComponent,
      ],
      providers: [
        { provide: Title, useValue: titleSpy },
        { provide: Meta, useValue: metaSpy },
      ],
    }).compileComponents();

    titleServiceSpy = TestBed.inject(Title) as jasmine.SpyObj<Title>;
    metaServiceSpy = TestBed.inject(Meta) as jasmine.SpyObj<Meta>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should set the title using the Title service`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(titleServiceSpy.setTitle).toHaveBeenCalled();
  });

  it(`should set the 'description' meta tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(metaServiceSpy.addTag).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'description' })
    );
  });

  it(`should set the 'format-detection' meta tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(metaServiceSpy.addTag).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'format-detection' })
    );
  });
});
