import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  collapseMenu(): void {
    this.isMenuCollapsed = true;
  }

  // Template helpers for aria attributes
  _language = $localize`language`;
}
