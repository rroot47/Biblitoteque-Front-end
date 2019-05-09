import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsageComponent } from './edit-usage.component';

describe('EditUsageComponent', () => {
  let component: EditUsageComponent;
  let fixture: ComponentFixture<EditUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
