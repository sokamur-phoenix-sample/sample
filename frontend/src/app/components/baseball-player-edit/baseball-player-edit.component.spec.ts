import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseballPlayerEditComponent } from './baseball-player-edit.component';

describe('BaseballPlayerEditComponent', () => {
  let component: BaseballPlayerEditComponent;
  let fixture: ComponentFixture<BaseballPlayerEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballPlayerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballPlayerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
