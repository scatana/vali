import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuClosed = true;

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuClosed = !this.isMenuClosed;
  }

  closeMenu(): void {
    this.isMenuClosed = true;
  }

  // Template helpers for aria attributes
  _language = $localize`language`;
}
