import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeEditorDialogComponent } from './code-editor-dialog.component';

describe('CodeEditorDialogComponent', () => {
  let component: CodeEditorDialogComponent;
  let fixture: ComponentFixture<CodeEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CodeEditorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
