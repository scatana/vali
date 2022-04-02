import { Component, OnInit } from '@angular/core';
import { Pricing } from 'src/app/interfaces/pricing.interface';
import { PricingService } from 'src/app/services/pricing/pricing.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
})
export class RatesComponent implements OnInit {
  public documentPrices: Pricing[];

  constructor(private pricingService: PricingService) {
    this.documentPrices = pricingService.getDocumentPrices();
  }

  ngOnInit(): void {}
}
