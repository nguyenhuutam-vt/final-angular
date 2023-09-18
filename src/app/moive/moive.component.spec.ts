import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveComponent } from './moive.component';

describe('MoiveComponent', () => {
  let component: MoiveComponent;
  let fixture: ComponentFixture<MoiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoiveComponent]
    });
    fixture = TestBed.createComponent(MoiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
