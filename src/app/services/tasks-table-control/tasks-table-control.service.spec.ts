import { TestBed } from '@angular/core/testing';

import { TasksTableControlService } from './tasks-table-control.service';

describe('TasksTableControlService', () => {
  let service: TasksTableControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksTableControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
