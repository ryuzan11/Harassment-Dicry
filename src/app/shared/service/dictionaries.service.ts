import { Injectable } from '@angular/core';
import { Dictionaries } from '../models/dictionaries';
import { DICTIONARIES } from '../default-data/default-dictionaries';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  getDictionaries(): Dictionaries[] {
    return DICTIONARIES;
  }
}
