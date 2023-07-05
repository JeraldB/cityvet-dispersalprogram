import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivestockPage } from './livestock.page';

describe('LivestockPage', () => {
  let component: LivestockPage;
  let fixture: ComponentFixture<LivestockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LivestockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
