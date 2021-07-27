import { TestBed } from '@angular/core/testing';

import { SearchmoviesService } from './searchmovies.service';

describe('SearchmoviesService', () => {
  let service: SearchmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
