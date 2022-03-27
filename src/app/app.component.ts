import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

const MAIN_BRAND_COLOR = '#800020';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      $localize`Valentina Catana - Certified Translator, Montreal`
    );
    this.metaService.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.metaService.addTag({
      name: 'theme-color',
      content: MAIN_BRAND_COLOR,
    });
    this.metaService.addTag({
      name: 'format-detection',
      content: 'telephone=no',
    });
    this.metaService.addTag({
      name: 'description',
      content: $localize`Certified translator Montreal, Quebec, Canada. Certified translations from and into English, French, Romanian. Official documents, general texts, subtitling.`,
    });
  }
}
