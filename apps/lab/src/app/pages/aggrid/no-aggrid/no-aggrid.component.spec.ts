import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoAggridComponent } from './no-aggrid.component';

describe('NoAggridComponent', () => {
  let component: NoAggridComponent;
  let fixture: ComponentFixture<NoAggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAggridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoAggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
