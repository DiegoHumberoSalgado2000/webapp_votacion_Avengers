import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VengadoresComponent } from './vengadores.component';

describe('VengadoresComponent', () => {
  let component: VengadoresComponent;
  let fixture: ComponentFixture<VengadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VengadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VengadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
