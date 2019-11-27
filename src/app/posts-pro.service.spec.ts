import { TestBed } from '@angular/core/testing';

import { PostsProService } from './posts-pro.service';

describe('PostsProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsProService = TestBed.get(PostsProService);
    expect(service).toBeTruthy();
  });
});
