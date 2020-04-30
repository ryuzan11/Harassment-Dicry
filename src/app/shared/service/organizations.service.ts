import { Injectable } from '@angular/core';
import { Organizations } from '../models/organizations';
import { ORGANIZATIONS } from '../default-data/default-organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  getOrganizations(): Organizations[] {
    return ORGANIZATIONS;
  }
}
