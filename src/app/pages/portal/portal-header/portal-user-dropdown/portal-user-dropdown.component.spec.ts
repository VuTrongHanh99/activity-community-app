import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUserDropdownComponent } from './portal-user-dropdown.component';

describe('PortalUserDropdownComponent', () => {
  let component: PortalUserDropdownComponent;
  let fixture: ComponentFixture<PortalUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalUserDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
