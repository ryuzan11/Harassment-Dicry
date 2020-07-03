import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HarassmentsService } from 'src/app/shared/service/harassments.service';
import { Harassment } from 'src/app/shared/models/harassment';

@Component({
  selector: 'app-harassment',
  templateUrl: './harassment.page.html',
  styleUrls: ['./harassment.page.scss'],
})
export class HarassmentPage implements OnInit {
  harassmentId = '';
  harassment: Harassment;

  constructor(
    private route: ActivatedRoute,
    public harassmentService: HarassmentsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.harassmentId = params.get('harassmentId');
    });
    this.getHarassment(this.harassmentId);
  }

  getHarassment(id: string) {
    this.harassment = this.harassmentService.getHarassmentFromId(id);
  }

}
