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

  it('should start with a closed menu', () => {
    expect(component.isMenuClosed).toBe(true);
  });

  it('should close the menu when the window is resized', () => {
    const spyCloseMenu = spyOn(component, 'closeMenu').and.callThrough();

    component.toggleMenu();
    expect(component.isMenuClosed).toBe(false);

    window.dispatchEvent(new Event('resize'));
    expect(spyCloseMenu).toHaveBeenCalled();
    expect(component.isMenuClosed).toBe(true);
  });

  describe('toggleMenu()', () => {
    it('should toggle the open/closed state of the menu', () => {
      component.toggleMenu();
      expect(component.isMenuClosed).toBe(false);

      component.toggleMenu();
      expect(component.isMenuClosed).toBe(true);
    });
  });

  describe('closeMenu()', () => {
    it('should close the menu', () => {
      component.toggleMenu();
      expect(component.isMenuClosed).toBe(false);

      component.closeMenu();
      expect(component.isMenuClosed).toBe(true);
    });
  });
});
