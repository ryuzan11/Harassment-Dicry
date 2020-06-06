import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CreateListPage } from '../../shared/ui/create-list/create-list.page';
import { AuthService } from 'src/app/auth/auth.service';
import { ListService } from 'src/app/shared/api/list.service';
import { DictionaryParentComponent } from '../../shared/ui/dictionary-parent/dictionary-parent.component';
import { List } from 'src/app/shared/models/list';
import { ActivatedRoute } from '@angular/router';
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
    private modalCtrl: ModalController,
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

  async openCreateList() {
    const modal = await this.modalCtrl.create({
      component: CreateListPage,
      backdropDismiss: false,
      cssClass: 'create-list-modal',
      componentProps: {
        uid: this.uid
      }
    });
    await modal.present();
  }

}
