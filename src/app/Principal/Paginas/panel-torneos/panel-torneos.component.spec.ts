import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTorneosComponent } from './panel-torneos.component';

describe('PanelTorneosComponent', () => {
  let component: PanelTorneosComponent;
  let fixture: ComponentFixture<PanelTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
