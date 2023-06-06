import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelVotacionComponent } from './panel-votacion.component';

describe('PanelVotacionComponent', () => {
  let component: PanelVotacionComponent;
  let fixture: ComponentFixture<PanelVotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelVotacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
