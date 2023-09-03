import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AggridEnterpriseComponent } from './aggrid-enterprise.component';

describe('AggridEnterpriseComponent', () => {
  let component: AggridEnterpriseComponent;
  let fixture: ComponentFixture<AggridEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridEnterpriseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AggridEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
