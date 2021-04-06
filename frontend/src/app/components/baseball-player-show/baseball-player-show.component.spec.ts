import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseballPlayerShowComponent } from './baseball-player-show.component';

describe('BaseballPlayerShowComponent', () => {
  let component: BaseballPlayerShowComponent;
  let fixture: ComponentFixture<BaseballPlayerShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballPlayerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballPlayerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
