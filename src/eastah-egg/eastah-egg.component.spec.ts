import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastahEggComponent } from './eastah-egg.component';

describe('EastahEggComponent', () => {
  let component: EastahEggComponent;
  let fixture: ComponentFixture<EastahEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EastahEggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EastahEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
