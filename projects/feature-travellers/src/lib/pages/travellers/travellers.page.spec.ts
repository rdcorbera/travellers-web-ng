import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellersPage } from './travellers.page';

describe('TravellersComponent', () => {
  let component: TravellersPage;
  let fixture: ComponentFixture<TravellersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellersPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
