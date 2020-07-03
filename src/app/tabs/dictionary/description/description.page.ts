import { Component, OnInit, OnDestroy } from '@angular/core';
import { Description } from 'src/app/shared/models/description';
import { ActivatedRoute, Params } from '@angular/router';
import { DescriptionsService } from 'src/app/shared/service/descriptions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit, OnDestroy {
  descriptionId: string;
  description: Description;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private descriptionService: DescriptionsService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.route.paramMap.subscribe((params: Params) => {
      this.descriptionId = params.get('descriptionId');
      this.description = this.descriptionService.getDescription(this.descriptionId);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
