import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabSidebarComponent } from './lab-sidebar.component';

describe('LabSidebarComponent', () => {
  let component: LabSidebarComponent;
  let fixture: ComponentFixture<LabSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
