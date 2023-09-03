import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AggridCustomizingCellsComponent } from './aggrid-customizing-cells.component';

describe('AggridCustomizingCellsComponent', () => {
  let component: AggridCustomizingCellsComponent;
  let fixture: ComponentFixture<AggridCustomizingCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridCustomizingCellsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AggridCustomizingCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
