import {
  Component,
  HostListener,
  Inject,
  LOCALE_ID,
  OnInit,
  Renderer2,
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

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  toggleNavbar(): void {
    this.isNavbarHidden = window.scrollY <= NAVBAR_DISPLAY_THRESHOLD;
  }

  toggleMenu(): void {
    this.isMenuClosed = !this.isMenuClosed;
    this.adjustScrollOnBody();
  }

  @HostListener('window:resize', [])
  closeMenu(): void {
    this.isMenuClosed = true;
    this.adjustScrollOnBody();
  }

  // Template helpers for aria attributes
  _language = $localize`language`;

  private adjustScrollOnBody() {
    if (this.isMenuClosed) {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.addClass(document.body, 'overflow-hidden');
    }
  }
}
