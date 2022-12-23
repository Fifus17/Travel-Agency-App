import { TestBed } from '@angular/core/testing';

import { TemporaryDataService } from './temporary-data.service';

describe('TemporaryDataService', () => {
  let service: TemporaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
