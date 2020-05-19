import { Injectable } from '@angular/core';
import { Harassment } from '../models/harassment';
import { HARASSMENTS } from '../default-data/default-harassments';

@Injectable({
  providedIn: 'root'
})
export class HarassmentsService {
  getHarassments(): Harassment[] {
    return HARASSMENTS;
  }

  getHarassmentFromId(id: string): Harassment {
    for (const h of HARASSMENTS) {
      if (h.id === id && h.state === 'public' ) {
        return  h;
      }
    }
  }

  getHarassmentFromName(name: string): Harassment {
    for (const h of HARASSMENTS) {
      if (h.name === name && h.state === 'public' ) {
        return  h;
      }
    }
  }
}
