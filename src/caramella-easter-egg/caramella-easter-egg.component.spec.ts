import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaramellaEasterEggComponent } from './caramella-easter-egg.component';

describe('CaramellaEasterEggComponent', () => {
  let component: CaramellaEasterEggComponent;
  let fixture: ComponentFixture<CaramellaEasterEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaramellaEasterEggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaramellaEasterEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
