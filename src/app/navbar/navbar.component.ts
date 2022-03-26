import {
  Component,
  HostListener,
  Inject,
  LOCALE_ID,
  OnInit,
} from '@angular/core';

const NAVBAR_DISPLAY_THRESHOLD = 112;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarHidden = true;
  isMenuClosed = true;

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  toggleNavbar(): void {
    this.isNavbarHidden = window.scrollY <= NAVBAR_DISPLAY_THRESHOLD;
  }

  toggleMenu(): void {
    this.isMenuClosed = !this.isMenuClosed;
  }

  @HostListener('window:resize', [])
  closeMenu(): void {
    this.isMenuClosed = true;
  }

  // Template helpers for aria attributes
  _language = $localize`language`;
}
