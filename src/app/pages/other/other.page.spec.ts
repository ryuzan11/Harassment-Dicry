import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherPage } from './other.page';

describe('OtherPage', () => {
  let component: OtherPage;
  let fixture: ComponentFixture<OtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
