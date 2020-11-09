import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritadosComponent } from './favoritados.component';

describe('FavoritadosComponent', () => {
  let component: FavoritadosComponent;
  let fixture: ComponentFixture<FavoritadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
