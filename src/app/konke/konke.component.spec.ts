import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonkeComponent } from './konke.component';

describe('KonkeComponent', () => {
  let component: KonkeComponent;
  let fixture: ComponentFixture<KonkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
