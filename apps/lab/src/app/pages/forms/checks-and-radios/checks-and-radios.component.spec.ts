import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecksAndRadiosComponent } from './checks-and-radios.component';

describe('ChecksAndRadiosComponent', () => {
  let component: ChecksAndRadiosComponent;
  let fixture: ComponentFixture<ChecksAndRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecksAndRadiosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecksAndRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
