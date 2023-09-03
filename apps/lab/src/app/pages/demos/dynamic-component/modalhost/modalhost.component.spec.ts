import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalhostComponent } from './modalhost.component';

describe('ModalhostComponent', () => {
  let component: ModalhostComponent;
  let fixture: ComponentFixture<ModalhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalhostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
