import { TestBed } from '@angular/core/testing';

import { DatabaseConnectionService } from './database-connection.service';

describe('DatabaseConnectionService', () => {
  let service: DatabaseConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
