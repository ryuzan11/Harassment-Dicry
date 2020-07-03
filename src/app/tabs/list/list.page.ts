import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from 'src/app/shared/api/list.service';
import { CategoryParentComponent } from '../../shared/ui/category-parent/category-parent.component';
import { NavList } from 'src/app/shared/models/nav-list';
import { UserService } from 'src/app/shared/api/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  uid: string;
  params: NavList = {
    type: 'list',
    lists: null
  };
  page = false;
  navHome: any = CategoryParentComponent;
  private subscriptions = new Subscription();

  constructor(
    private userService: UserService,
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.listService.getLists(this.userService.uid).subscribe(lists => {
      this.params.lists = lists;
      this.page = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
