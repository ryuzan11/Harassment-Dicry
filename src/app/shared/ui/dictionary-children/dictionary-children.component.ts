import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DictionaryDetailComponent } from '../dictionary-detail/dictionary-detail.component';
import { HarassmentsService } from '../../service/harassments.service';
import { Harassment } from '../../models/harassment';
import { Router, RouterEvent} from '@angular/router';


@Component({
  selector: 'ls-dictionary-children',
  templateUrl: './dictionary-children.component.html',
  styleUrls: ['./dictionary-children.component.scss'],
})
export class DictionaryChildrenComponent implements OnInit {
  variations: {
    'name': string;
    'harassmentId': string | undefined;
  }[];
  harassments: Harassment[];
  nextPage = DictionaryDetailComponent;
  selectedPath = '';

  constructor(
    private navParams: NavParams,
    private router: Router,
    public harassmentsService: HarassmentsService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.harassments = this.harassmentsService.getHarassments();
    this.variations = this.navParams.data.children;
    this.variations.forEach(v => {
      this.harassments.forEach(h => {
        if (v.name === h.name) {
          v.harassmentId = h.id;
        }
      });
    });
  }

  navigateShow(id: string) {
    this.router.navigateByUrl('/main/dictionary/' + id);
  }

}
