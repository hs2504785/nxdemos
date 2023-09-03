import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithVirtualScrollingComponent } from './with-virtual-scrolling.component';

describe('WithVirtualScrollingComponent', () => {
  let component: WithVirtualScrollingComponent;
  let fixture: ComponentFixture<WithVirtualScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WithVirtualScrollingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithVirtualScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
