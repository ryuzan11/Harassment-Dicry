import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/api/list.service';
import { CategoryParentComponent } from '../../shared/ui/category-parent/category-parent.component';
import { NavList } from 'src/app/shared/models/nav-list';
import { UserService } from 'src/app/shared/api/user.service';

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
  navHome: any = CategoryParentComponent;

  constructor(
    private userService: UserService,
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.uid = this.userService.user.uid;
    this.listService.getLists(this.uid).subscribe(lists => {
      this.params.lists = lists;
      this.page = true;
    });
  }

}
