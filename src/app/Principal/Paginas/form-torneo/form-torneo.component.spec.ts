import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTorneoComponent } from './form-torneo.component';

describe('FormTorneoComponent', () => {
  let component: FormTorneoComponent;
  let fixture: ComponentFixture<FormTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
