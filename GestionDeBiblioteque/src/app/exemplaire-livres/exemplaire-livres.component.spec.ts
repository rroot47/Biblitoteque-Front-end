import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaireLivresComponent } from './exemplaire-livres.component';

describe('ExemplaireLivresComponent', () => {
  let component: ExemplaireLivresComponent;
  let fixture: ComponentFixture<ExemplaireLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplaireLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplaireLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
