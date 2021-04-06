import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseballPlayerIndexComponent } from './baseball-player-index.component';

describe('BaseballPlayerIndexComponent', () => {
  let component: BaseballPlayerIndexComponent;
  let fixture: ComponentFixture<BaseballPlayerIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballPlayerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballPlayerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
