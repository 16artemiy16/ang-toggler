import { TestBed } from '@angular/core/testing';

import { AngTogglerService } from './ang-toggler.service';

describe('AngTogglerService', () => {
  let service: AngTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
