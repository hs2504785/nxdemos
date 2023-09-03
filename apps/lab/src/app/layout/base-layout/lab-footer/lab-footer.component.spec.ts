import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabFooterComponent } from './lab-footer.component';

describe('LabFooterComponent', () => {
  let component: LabFooterComponent;
  let fixture: ComponentFixture<LabFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
