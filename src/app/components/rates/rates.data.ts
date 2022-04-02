import { Rate } from './rates.interface';

export const documents: Rate[] = [
  {
    item: $localize`Attestation / Certificate`,
    price: 30,
  },
  {
    item: $localize`Birth / Marriage / Divorce / Death Certificate`,
    price: 35,
  },
  {
    item: $localize`Comparative Evaluation for Studies Done Outside Quebec`,
    price: 40,
  },
  {
    item: $localize`Criminal Record`,
    price: 35,
  },
  {
    item: $localize`Divorce Judgment`,
    itemQualifier: $localize`Quebec`,
    price: 30,
  },
  {
    item: $localize`Divorce Judgment`,
    itemQualifier: $localize`Romania`,
    price: 50,
    unit: $localize`page`,
  },
  {
    item: $localize`Driver's License`,
    price: 35,
  },
  {
    item: $localize`Passport`,
    price: 35,
  },
  {
    item: $localize`High School / University Diploma`,
    price: 30,
    unit: $localize`page`,
  },
  {
    item: $localize`High School / University Diploma`,
    itemQualifier: $localize`French to English`,
    price: 35,
    unit: $localize`page`,
  },
  {
    item: $localize`Power of Attorney`,
    price: 40,
    unit: $localize`page`,
  },
  {
    item: $localize`Transcript of Records`,
    price: 100,
  },
];
