import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManchesterComponent } from './manchester.component';

describe('ManchesterComponent', () => {
  let component: ManchesterComponent;
  let fixture: ComponentFixture<ManchesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManchesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManchesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
