import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarWebComponent } from './consultar-web.component';

describe('ConsultarWebComponent', () => {
  let component: ConsultarWebComponent;
  let fixture: ComponentFixture<ConsultarWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
