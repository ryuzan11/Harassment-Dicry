import { Injectable } from '@angular/core';
import { Harassment } from '../models/harassment';
import { HARASSMENTS } from '../default-data/default-harassments';
import { CategoriesService } from '../service/categories.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class HarassmentsService {

  constructor(public categoriesService: CategoriesService) {}

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

  getHarassmentsFromCategoryId(id: string): Harassment[] {
    let category: Category;
    for (const c of this.categoriesService.categories) {
      if (c.id === id) {
        category = c;
      }
    }
    return HARASSMENTS.map((h: Harassment) => {
      if (h.category === category.name && h.state === 'public' ) {
        return h;
      }
    });
  }

  getHarassmentsFromCategoryName(name: string): string[] {
    let category: Category;
    const harassments: string[] = [];
    for (const c of this.categoriesService.categories) {
      if (c.name === name) {
        category = c;
      }
    }
    HARASSMENTS.map((h: Harassment) => {
      if (h.category === category.name && h.state === 'public' ) {
        harassments.push(h.name);
      }
    });
    return harassments;
  }
}
