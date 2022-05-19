import { TestBed } from '@angular/core/testing';

import { GihubService } from './gihub.service';

describe('GihubService', () => {
  let service: GihubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GihubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
