import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Harassment } from '../../models/harassment';
import { HarassmentsService } from '../../service/harassments.service';
import { OrganizationsService } from '../../service/organizations.service';
import { Organization } from '../../models/organization';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss'],
})
export class DictionaryDetailComponent implements OnInit {
  harassments: Harassment[];
  harassment: Harassment;
  organizations: Organization[];
  organization: Organization[] = [];
  hShow = false;
  oShow = false;

  constructor(
    private navParams: NavParams,
    private harassmentsService: HarassmentsService,
    private organizationsService: OrganizationsService
  ) {}

  ngOnInit() {
    this.getHarassments();
    this.getOrganizations();
    this.harassments.forEach(h => {
      if (h.name === this.navParams.data.name) {
        this.harassment = h;
      }
    });
    this.organizations.forEach(o => {
      if (o.name === this.navParams.data.name) {
        this.organization.push(o);
      }
    });
    if (this.harassment) {
      this.hShow = true;
    } else {
      this.oShow = true;
    }
  }

  getHarassments(): void {
    this.harassments = this.harassmentsService.getHarassments();
  }

  getOrganizations(): void {
    this.organizations = this.organizationsService.getOrganizations();
  }

}
