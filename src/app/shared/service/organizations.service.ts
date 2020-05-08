import { Injectable } from '@angular/core';
import { Organization } from '../models/organization';
import { ORGANIZATIONS } from '../default-data/default-organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  getOrganizations(): Organization[] {
    return ORGANIZATIONS;
  }
}
