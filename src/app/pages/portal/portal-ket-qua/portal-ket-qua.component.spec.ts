import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalKetQuaComponent } from './portal-ket-qua.component';

describe('PortalKetQuaComponent', () => {
  let component: PortalKetQuaComponent;
  let fixture: ComponentFixture<PortalKetQuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalKetQuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalKetQuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
