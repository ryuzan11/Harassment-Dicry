import { Injectable } from '@angular/core';
import { PREFECTURES } from '../default-data/default-prefectures';

@Injectable({
  providedIn: 'root'
})
export class PrefecturesService {

  get prefectures() {
    return PREFECTURES;
  }

}
