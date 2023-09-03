import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AggridDemoComponent } from './aggrid-demo.component';

describe('AggridDemoComponent', () => {
  let component: AggridDemoComponent;
  let fixture: ComponentFixture<AggridDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AggridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
