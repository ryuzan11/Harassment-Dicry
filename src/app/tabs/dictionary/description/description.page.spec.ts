import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescriptionPage } from './description.page';

describe('DescriptionPage', () => {
  let component: DescriptionPage;
  let fixture: ComponentFixture<DescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
