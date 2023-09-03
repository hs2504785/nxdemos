import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlerthostComponent } from './alerthost.component';

describe('AlerthostComponent', () => {
  let component: AlerthostComponent;
  let fixture: ComponentFixture<AlerthostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlerthostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlerthostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
