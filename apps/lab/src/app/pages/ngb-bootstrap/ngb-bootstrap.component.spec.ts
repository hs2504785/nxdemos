import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbBootstrapComponent } from './ngb-bootstrap.component';

describe('NgbBootstrapComponent', () => {
  let component: NgbBootstrapComponent;
  let fixture: ComponentFixture<NgbBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbBootstrapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgbBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
