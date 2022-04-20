import { TestBed } from '@angular/core/testing';

import { GsearchService } from './gsearch.service';

describe('GsearchService', () => {
  let service: GsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
