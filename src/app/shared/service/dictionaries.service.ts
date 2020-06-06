import { Injectable } from '@angular/core';
import { DICTIONARIES } from '../default-data/default-dictionaries';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  get dictionaries() {
    return DICTIONARIES;
  }

}
