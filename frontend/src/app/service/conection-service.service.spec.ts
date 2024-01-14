import { TestBed } from '@angular/core/testing';

import { ConectionServiceService } from './conection-service.service';

describe('ConectionServiceService', () => {
  let service: ConectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
