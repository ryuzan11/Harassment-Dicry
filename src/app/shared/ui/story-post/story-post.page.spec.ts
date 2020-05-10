import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoryPostPage } from './story-post.page';

describe('StoryPostPage', () => {
  let component: StoryPostPage;
  let fixture: ComponentFixture<StoryPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
