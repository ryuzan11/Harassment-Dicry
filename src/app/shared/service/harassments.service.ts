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
}
