import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispersalPage } from './dispersal.page';

describe('DispersalPage', () => {
  let component: DispersalPage;
  let fixture: ComponentFixture<DispersalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DispersalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
