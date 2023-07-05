import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLoginPagePage } from './admin-login-page.page';

describe('AdminLoginPagePage', () => {
  let component: AdminLoginPagePage;
  let fixture: ComponentFixture<AdminLoginPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminLoginPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
