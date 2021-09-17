import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerDetailPage } from './traveler-detail.page';

describe('TravelerDetailComponent', () => {
  let component: TravelerDetailPage;
  let fixture: ComponentFixture<TravelerDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelerDetailPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
