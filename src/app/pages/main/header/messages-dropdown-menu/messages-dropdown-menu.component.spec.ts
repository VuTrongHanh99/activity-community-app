import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDropdownMenuComponent } from './messages-dropdown-menu.component';

describe('MessagesDropdownMenuComponent', () => {
  let component: MessagesDropdownMenuComponent;
  let fixture: ComponentFixture<MessagesDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesDropdownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
