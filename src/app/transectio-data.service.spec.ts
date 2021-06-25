import { TestBed } from '@angular/core/testing';

import { TransectioDataService } from './transectio-data.service';

describe('TransectioDataService', () => {
  let service: TransectioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransectioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
