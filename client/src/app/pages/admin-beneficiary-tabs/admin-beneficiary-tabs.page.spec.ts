import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBeneficiaryTabsPage } from './admin-beneficiary-tabs.page';

describe('AdminBeneficiaryTabsPage', () => {
  let component: AdminBeneficiaryTabsPage;
  let fixture: ComponentFixture<AdminBeneficiaryTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminBeneficiaryTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
