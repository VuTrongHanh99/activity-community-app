import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMenuSidebarComponent } from './portal-menu-sidebar.component';

describe('PortalMenuSidebarComponent', () => {
  let component: PortalMenuSidebarComponent;
  let fixture: ComponentFixture<PortalMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalMenuSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
