import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutVirtualScrollingComponent } from './without-virtual-scrolling.component';

describe('WithoutVirtualScrollingComponent', () => {
  let component: WithoutVirtualScrollingComponent;
  let fixture: ComponentFixture<WithoutVirtualScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WithoutVirtualScrollingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutVirtualScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
