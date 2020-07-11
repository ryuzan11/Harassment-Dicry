import { Component, OnInit } from '@angular/core';
import { DescriptionsService } from 'src/app/shared/service/descriptions.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  constructor(
    private descriptionService: DescriptionsService
  ) { }

  ngOnInit() {
  }

}
