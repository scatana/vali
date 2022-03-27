import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

const NAVBAR_DISPLAY_THRESHOLD = 112;
const WINDOW_SCROLL_Y_POSITION = 10;

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

  it('should start with a closed menu', () => {
    expect(component.isMenuClosed).toBe(true);
  });

  it('should try to toggle the navbar when the window is scrolled', () => {
    const spyToggleNavbar = spyOn(component, 'toggleNavbar');

    window.dispatchEvent(new Event('scroll'));
    expect(spyToggleNavbar).toHaveBeenCalled();
  });

  it('should close the menu when the window is resized', () => {
    const spyCloseMenu = spyOn(component, 'closeMenu').and.callThrough();

    component.openMenu();
    expect(component.isMenuClosed).toBe(false);

    window.dispatchEvent(new Event('resize'));
    expect(spyCloseMenu).toHaveBeenCalled();
    expect(component.isMenuClosed).toBe(true);
  });

  describe('toggleNavbar()', () => {
    it('should toggle the navbar based on the scrolling offset', () => {
      window.scrollY = WINDOW_SCROLL_Y_POSITION;
      component.toggleNavbar();
      expect(component.isNavbarHidden).toBe(true);

      window.scrollY = NAVBAR_DISPLAY_THRESHOLD;
      component.toggleNavbar();
      expect(component.isNavbarHidden).toBe(true);

      window.scrollY = NAVBAR_DISPLAY_THRESHOLD + 1;
      component.toggleNavbar();
      expect(component.isNavbarHidden).toBe(false);
    });
  });

  describe('openMenu()', () => {
    it('should trigger the display of the menu', () => {
      component.openMenu();
      expect(component.isMenuClosed).toBe(false);
    });
  });

  describe('closeMenu()', () => {
    it('should close the menu', () => {
      component.openMenu();
      expect(component.isMenuClosed).toBe(false);

      component.closeMenu();
      expect(component.isMenuClosed).toBe(true);
    });
  });
});
