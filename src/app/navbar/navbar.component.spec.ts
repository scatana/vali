import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with a collapsed navbar', () => {
    expect(component.isNavbarCollapsed).toBe(true);
  });

  describe('toggleNavbar()', () => {
    it('should toggle the collapsed/uncollapsed state of the navbar', () => {
      component.toggleNavbar();
      expect(component.isNavbarCollapsed).toBe(false);

      component.toggleNavbar();
      expect(component.isNavbarCollapsed).toBe(true);
    });
  });
});
