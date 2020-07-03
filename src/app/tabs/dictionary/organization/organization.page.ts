import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Organization } from 'src/app/shared/models/organization';
import { OrganizationsService } from 'src/app/shared/service/organizations.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  organizationId: string;
  organization: Organization[];
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationsService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.route.paramMap.subscribe((params: Params) => {
      this.organizationId = params.get('organizationId');
      this.organization = this.organizationService.getOrganization(this.organizationId);
    }));
  }

}
