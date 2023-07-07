import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDispersalTabsPage } from './admin-dispersal-tabs.page';

describe('AdminDispersalTabsPage', () => {
  let component: AdminDispersalTabsPage;
  let fixture: ComponentFixture<AdminDispersalTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDispersalTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
