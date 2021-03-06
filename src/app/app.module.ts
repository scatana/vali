import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { RatesComponent } from './components/rates/rates.component';

import { PricingService } from './services/pricing/pricing.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    RatesComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [Title, PricingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
