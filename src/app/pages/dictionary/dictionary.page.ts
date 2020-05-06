import { Component, OnInit } from '@angular/core';
import { Dictionaries } from 'src/app/shared/models/dictionaries';
import { DictionariesService } from 'src/app/shared/service/dictionaries.service';
import { DictionaryParentComponent } from '../../shared/ui/dictionary-top/dictionary-parent.component';

@Component({
  selector: 'app-dictionary',
  templateUrl: 'dictionary.page.html',
  styleUrls: ['dictionary.page.scss']
})
export class DictionaryPage implements OnInit {
  dictionaries: Dictionaries[];
  navHome: any = DictionaryParentComponent;

  constructor(
    private dictionariesService: DictionariesService,
  ) {}

  ngOnInit() {
    this.getDictionaries();
  }

  getDictionaries(): void {
    this.dictionaries = this.dictionariesService.getDictionaries();
  }

}
