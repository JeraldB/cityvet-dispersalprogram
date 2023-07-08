import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardsPage } from './admin-dashboards.page';

describe('AdminDashboardsPage', () => {
  let component: AdminDashboardsPage;
  let fixture: ComponentFixture<AdminDashboardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDashboardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
