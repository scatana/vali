import { Injectable } from '@angular/core';
import { Pricing } from 'src/app/interfaces/pricing.interface';

import { documents } from './pricing.data';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  constructor() {}

  getDocumentPrices(): Pricing[] {
    return documents;
  }
}
