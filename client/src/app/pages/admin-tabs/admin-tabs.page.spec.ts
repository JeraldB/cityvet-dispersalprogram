import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTabsPage } from './admin-tabs.page';

describe('AdminTabsPage', () => {
  let component: AdminTabsPage;
  let fixture: ComponentFixture<AdminTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
