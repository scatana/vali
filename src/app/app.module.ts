import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, NavbarComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
