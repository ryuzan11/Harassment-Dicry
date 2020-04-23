import { Component, OnInit } from '@angular/core';
import { Prefecture } from '../../shared/models/prefecture';
import { PrefecturesService } from 'src/app/shared/service/prefectures.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {
  prefectures: Prefecture[];
  console = console;

  constructor(private prefecturesService: PrefecturesService) { }

  ngOnInit() {
    this.getPrefectures();
    console.log(this.prefectures);
  }

  getPrefectures(): void {
    this.prefectures = this.prefecturesService.getPrefectures();
  }


}
