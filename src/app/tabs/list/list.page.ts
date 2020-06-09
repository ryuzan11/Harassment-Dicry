import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ListService } from 'src/app/shared/api/list.service';
import { DictionaryParentComponent } from '../../shared/ui/dictionary-parent/dictionary-parent.component';
import { NavList } from 'src/app/shared/models/nav-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  uid: string;
  params: NavList = {
    type: 'list',
    lists: null
  };
  page = false;
  navHome: any = DictionaryParentComponent;

  constructor(
    private auth: AuthService,
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.listService.getLists(this.uid).subscribe(lists => {
      this.params.lists = lists;
      this.page = true;
    });
  }

}
