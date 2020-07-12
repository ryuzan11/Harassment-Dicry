import { Injectable } from '@angular/core';
import { History, Low } from '../models/description';
import { HISTORY, LOW } from '../default-data/default-descriptions';

@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {
  get histories(): History[] {
    return HISTORY;
  }

  get lows(): Low[] {
    return LOW;
  }

  // getDescription(id: string): Description {
  //   return this.descriptions.find(ele => ele.id === id);
  // }
}
