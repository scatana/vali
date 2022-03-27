import {
  Component,
  HostListener,
  Inject,
  LOCALE_ID,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const NAVBAR_DISPLAY_THRESHOLD = 112;

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
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  toggleNavbar(): void {
    this.isNavbarHidden = window.scrollY <= NAVBAR_DISPLAY_THRESHOLD;
  }

  openMenu(): void {
    this.isMenuClosed = false;
    disableBodyScroll(this.elementRef.nativeElement);
  }

  @HostListener('window:resize', [])
  closeMenu(): void {
    this.isMenuClosed = true;
    enableBodyScroll(this.elementRef.nativeElement);
  }

  // Template helpers for aria attributes
  _language = $localize`language`;
}
