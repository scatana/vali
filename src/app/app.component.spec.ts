import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';

describe('AppComponent', () => {
  let titleServiceSpy: jasmine.SpyObj<Title>;
  let metaServiceSpy: jasmine.SpyObj<Meta>;
  let app: AppComponent;

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

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.ngOnInit();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should set the title using the Title service`, () => {
    expect(titleServiceSpy.setTitle).toHaveBeenCalled();
  });

  it(`should set the right meta tags`, () => {
    expect(metaServiceSpy.addTag).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'viewport' })
    );
    expect(metaServiceSpy.addTag).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'theme-color' })
    );
    expect(metaServiceSpy.addTag).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'description' })
    );
  });
});
