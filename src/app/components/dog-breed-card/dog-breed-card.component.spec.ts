import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedCardComponent } from './dog-breed-card.component';

describe('DogBreedCardComponent', () => {
  let component: DogBreedCardComponent;
  let fixture: ComponentFixture<DogBreedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogBreedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
