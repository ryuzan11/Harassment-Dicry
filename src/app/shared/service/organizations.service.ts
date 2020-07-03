import { Injectable } from '@angular/core';
import { Organization } from '../models/organization';
import { ORGANIZATIONS } from '../default-data/default-organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  get organizations(): Organization[] {
    return ORGANIZATIONS;
  }

  getOrganization(id: string): Organization[] {
    return this.organizations.filter(ele => {
      return ele.organizationId === id;
    });
  }
}
