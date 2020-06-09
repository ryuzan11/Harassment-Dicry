import { Component, OnInit } from '@angular/core';
import { DictionariesService } from 'src/app/shared/service/dictionaries.service';
import { CategoryParentComponent } from '../../shared/ui/category-parent/category-parent.component';
import { NavList } from 'src/app/shared/models/nav-list';

@Component({
  selector: 'app-dictionary',
  templateUrl: 'dictionary.page.html',
  styleUrls: ['dictionary.page.scss']
})
export class DictionaryPage implements OnInit {
  params: NavList = {
    type: 'dic',
    lists: null
  };
  navHome: any = CategoryParentComponent;

  constructor(
    private dictionariesService: DictionariesService,
  ) {}

  ngOnInit() {
    this.params.lists = this.dictionariesService.dictionaries;
  }

}
