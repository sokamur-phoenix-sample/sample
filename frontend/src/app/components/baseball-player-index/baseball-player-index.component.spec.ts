import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballPlayerIndexComponent } from './baseball-player-index.component';

describe('BaseballPlayerIndexComponent', () => {
  let component: BaseballPlayerIndexComponent;
  let fixture: ComponentFixture<BaseballPlayerIndexComponent>;

  beforeEach(async(() => {
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
