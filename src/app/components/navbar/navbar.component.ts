import {
  Component,
  HostListener,
  Inject,
  LOCALE_ID,
  OnInit,
  ElementRef,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import {
  MAIN_BRAND_COLOR,
  ACCENT_BRAND_COLOR,
  NAVBAR_DISPLAY_THRESHOLD,
} from '../../utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarHidden = true;
  isMenuClosed = true;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private elementRef: ElementRef,
    private metaService: Meta
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  toggleNavbar(): void {
    this.isNavbarHidden = window.scrollY <= NAVBAR_DISPLAY_THRESHOLD;
  }

  openMenu(): void {
    this.isMenuClosed = false;

    this.metaService.updateTag({
      name: 'theme-color',
      content: ACCENT_BRAND_COLOR,
    });

    disableBodyScroll(this.elementRef.nativeElement);
  }

  closeMenu(): void {
    this.isMenuClosed = true;

    this.metaService.updateTag({
      name: 'theme-color',
      content: MAIN_BRAND_COLOR,
    });

    enableBodyScroll(this.elementRef.nativeElement);
  }

  // Template helpers for aria attributes
  _language = $localize`language`;
}
