import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLivestocksTabsPage } from './admin-livestocks-tabs.page';

describe('AdminLivestocksTabsPage', () => {
  let component: AdminLivestocksTabsPage;
  let fixture: ComponentFixture<AdminLivestocksTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminLivestocksTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
