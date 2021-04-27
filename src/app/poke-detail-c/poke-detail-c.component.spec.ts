import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailCComponent } from './poke-detail-c.component';

describe('PokeDetailCComponent', () => {
  let component: PokeDetailCComponent;
  let fixture: ComponentFixture<PokeDetailCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
