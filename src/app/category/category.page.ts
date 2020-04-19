import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss']
})
export class CategoryPage {

  constructor(public auth: AuthService) {}

  signOut(): void {
    this.auth.authSignOut();
  }

}
