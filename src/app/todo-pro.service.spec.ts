import { TestBed } from '@angular/core/testing';

import { TodoProService } from './todo-pro.service';

describe('TodoProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoProService = TestBed.get(TodoProService);
    expect(service).toBeTruthy();
  });
});
