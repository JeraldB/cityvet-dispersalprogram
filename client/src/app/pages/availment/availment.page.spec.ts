import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailmentPage } from './availment.page';

describe('AvailmentPage', () => {
  let component: AvailmentPage;
  let fixture: ComponentFixture<AvailmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvailmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
