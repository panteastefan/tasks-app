import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTasksTableComponent } from './user-tasks-table.component';

describe('UserTasksTableComponent', () => {
  let component: UserTasksTableComponent;
  let fixture: ComponentFixture<UserTasksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
