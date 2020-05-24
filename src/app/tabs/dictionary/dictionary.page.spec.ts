import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DictionaryPage } from './dictionary.page';

describe('Tab2Page', () => {
  let component: DictionaryPage;
  let fixture: ComponentFixture<DictionaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DictionaryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
