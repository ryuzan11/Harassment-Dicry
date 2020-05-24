import { Injectable } from '@angular/core';
import { CATEGORIES } from '../default-data/default-categories';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  get categories() {
    return CATEGORIES;
  }

  get standardCategories(): Category[] {
    const categories: Category[] = [];
    const standard: string[] = ['03', '04', '05', '06'];
    for (const c of CATEGORIES) {
      if (standard.includes(c.id)) {
        categories.push(c);
      }
    }
    return categories;
  }

  getCategoryFromId(id: string): Category {
    for (const c of CATEGORIES) {
      if (c.id === id) {
        return c;
      }
    }
  }

}
