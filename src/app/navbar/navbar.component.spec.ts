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

  it('should start with a collapsed menu', () => {
    expect(component.isMenuCollapsed).toBe(true);
  });

  it('should collapse the menu when the window is resized', () => {
    const spyCollapseMenu = spyOn(component, 'collapseMenu');

    component.toggleMenu();
    expect(component.isMenuCollapsed).toBe(false);

    window.dispatchEvent(new Event('resize'));
    expect(spyCollapseMenu).toHaveBeenCalled();
  });

  describe('toggleMenu()', () => {
    it('should toggle the collapsed/uncollapsed state of the menu', () => {
      component.toggleMenu();
      expect(component.isMenuCollapsed).toBe(false);

      component.toggleMenu();
      expect(component.isMenuCollapsed).toBe(true);
    });
  });

  describe('collapseMenu()', () => {
    it('should collapse the menu', () => {
      component.toggleMenu();
      expect(component.isMenuCollapsed).toBe(false);

      component.collapseMenu();
      expect(component.isMenuCollapsed).toBe(true);
    });
  });
});
