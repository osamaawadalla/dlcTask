import { TestBed } from '@angular/core/testing';

import { UserProService } from './user-pro.service';

describe('UserProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserProService = TestBed.get(UserProService);
    expect(service).toBeTruthy();
  });
});
