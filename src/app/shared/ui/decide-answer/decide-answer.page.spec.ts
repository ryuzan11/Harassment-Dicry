import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecideAnswerPage } from './decide-answer.page';

describe('DecideAnswerPage', () => {
  let component: DecideAnswerPage;
  let fixture: ComponentFixture<DecideAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecideAnswerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecideAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
