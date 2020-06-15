import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditableTextPage } from './editable-text.page';

describe('EditableTextPage', () => {
  let component: EditableTextPage;
  let fixture: ComponentFixture<EditableTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditableTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
