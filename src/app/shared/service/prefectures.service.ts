import { Injectable } from '@angular/core';

import { Prefecture } from '../models/prefecture';
import { PREFECTURES } from '../default-data/default-prefectures';

@Injectable({
  providedIn: 'root'
})
export class PrefecturesService {
  getPrefectures(): Prefecture[] {
    return PREFECTURES;
  }
}
