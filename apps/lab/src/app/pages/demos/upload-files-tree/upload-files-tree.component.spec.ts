import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadFilesTreeComponent } from './upload-files-tree.component';

describe('UploadFilesTreeComponent', () => {
  let component: UploadFilesTreeComponent;
  let fixture: ComponentFixture<UploadFilesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFilesTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFilesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
