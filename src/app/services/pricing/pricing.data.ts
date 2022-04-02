import { Pricing } from '../../interfaces/pricing.interface';

export const documents: Pricing[] = [
  {
    name: $localize`Attestation / Certificate`,
    price: 30,
  },
  {
    name: $localize`Birth / Marriage / Divorce / Death Certificate`,
    price: 35,
  },
  {
    name: $localize`Comparative Evaluation for Studies Done Outside Quebec`,
    price: 40,
  },
  {
    name: $localize`Criminal Record`,
    price: 35,
  },
  {
    name: $localize`Divorce Judgment`,
    qualifier: $localize`Quebec`,
    price: 30,
  },
  {
    name: $localize`Divorce Judgment`,
    qualifier: $localize`Romania`,
    price: 50,
    unit: $localize`page`,
  },
  {
    name: $localize`Driver's License`,
    price: 35,
  },
  {
    name: $localize`Passport`,
    price: 35,
  },
  {
    name: $localize`High School / University Diploma`,
    price: 30,
    unit: $localize`page`,
  },
  {
    name: $localize`High School / University Diploma`,
    qualifier: $localize`French to English`,
    price: 35,
    unit: $localize`page`,
  },
  {
    name: $localize`Power of Attorney`,
    price: 40,
    unit: $localize`page`,
  },
  {
    name: $localize`Transcript of Records`,
    price: 100,
  },
];
