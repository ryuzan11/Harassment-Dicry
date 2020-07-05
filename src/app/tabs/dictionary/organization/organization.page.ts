import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Organization } from 'src/app/shared/models/organization';
import { OrganizationsService } from 'src/app/shared/service/organizations.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit, OnDestroy {
  aaa: object[] = [];
  page = false;
  organizationId: string;
  organization: Organization[];
  private subscriptions = new Subscription();
  console = console;

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationsService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.route.paramMap.subscribe((params: ParamMap) => {
      this.organizationId = params.get('organizationId');
      this.organization = this.organizationService.getOrganization(this.organizationId);
      this.page = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
