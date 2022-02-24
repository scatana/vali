import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle($localize `Valentina Catana - Certified Translator, Montreal`);
  }
}
