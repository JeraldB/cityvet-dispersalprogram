import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBeneficiaryPage } from './admin-beneficiary.page';

describe('AdminBeneficiaryPage', () => {
  let component: AdminBeneficiaryPage;
  let fixture: ComponentFixture<AdminBeneficiaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminBeneficiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
