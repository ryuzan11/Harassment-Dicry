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
}
