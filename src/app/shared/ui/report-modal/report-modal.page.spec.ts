import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportModalPage } from './report-modal.page';

describe('ReportModalPage', () => {
  let component: ReportModalPage;
  let fixture: ComponentFixture<ReportModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
