import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCharactersComponent } from './card-characters.component';

describe('CardCharactersComponent', () => {
  let component: CardCharactersComponent;
  let fixture: ComponentFixture<CardCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
