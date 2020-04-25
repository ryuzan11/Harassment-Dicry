import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: 'dictionary.page.html',
  styleUrls: ['dictionary.page.scss']
})
export class DictionaryPage {

  constructor(public auth: AuthService) {}

  signOut(): void {
    this.auth.authSignOut();
  }

}
