import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLivestockPage } from './admin-livestock.page';

describe('AdminLivestockPage', () => {
  let component: AdminLivestockPage;
  let fixture: ComponentFixture<AdminLivestockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminLivestockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
