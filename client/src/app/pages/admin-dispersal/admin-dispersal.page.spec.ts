import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDispersalPage } from './admin-dispersal.page';

describe('AdminDispersalPage', () => {
  let component: AdminDispersalPage;
  let fixture: ComponentFixture<AdminDispersalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDispersalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
