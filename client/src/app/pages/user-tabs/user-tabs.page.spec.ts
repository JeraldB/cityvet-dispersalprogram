import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTabsPage } from './user-tabs.page';

describe('UserTabsPage', () => {
  let component: UserTabsPage;
  let fixture: ComponentFixture<UserTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
