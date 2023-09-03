import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoOffcanvasComponent } from './demo-offcanvas.component';

describe('DemoOffcanvasComponent', () => {
  let component: DemoOffcanvasComponent;
  let fixture: ComponentFixture<DemoOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoOffcanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
