import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionListPage } from './action-list.page';

describe('ActionListPage', () => {
  let component: ActionListPage;
  let fixture: ComponentFixture<ActionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
