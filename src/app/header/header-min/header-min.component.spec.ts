import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMinComponent } from './header-min.component';

describe('HeaderMinComponent', () => {
  let component: HeaderMinComponent;
  let fixture: ComponentFixture<HeaderMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
