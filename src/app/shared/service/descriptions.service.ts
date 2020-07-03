import { Injectable } from '@angular/core';
import { Description } from '../models/description';
import { DESCRIPTIONS } from '../default-data/default-descriptions';

@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {
  get descriptions(): Description[] {
    return DESCRIPTIONS;
  }

  getDescription(id: string): Description {
    return this.descriptions.find(ele => ele.id === id);
  }
}
