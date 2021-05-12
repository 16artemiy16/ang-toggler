import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTogglerComponent } from './ang-toggler.component';

describe('AngTogglerComponent', () => {
  let component: AngTogglerComponent;
  let fixture: ComponentFixture<AngTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
