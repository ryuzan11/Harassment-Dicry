import { Injectable } from '@angular/core';
import { CATEGORIES } from '../default-data/default-categories';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  getCategories(): Category[] {
    return CATEGORIES;
  }

  getCategoryFromId(id: string): Category {
    for (const c of CATEGORIES) {
      if (c.id === id) {
        return c;
      }
    }
  }
}
