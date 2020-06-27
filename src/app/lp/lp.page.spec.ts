import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LpPage } from './lp.page';

describe('LpPage', () => {
  let component: LpPage;
  let fixture: ComponentFixture<LpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
