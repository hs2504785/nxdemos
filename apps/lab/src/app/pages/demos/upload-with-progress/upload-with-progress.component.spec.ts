import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadWithProgressComponent } from './upload-with-progress.component';

describe('UploadWithProgressComponent', () => {
  let component: UploadWithProgressComponent;
  let fixture: ComponentFixture<UploadWithProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UploadWithProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadWithProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
