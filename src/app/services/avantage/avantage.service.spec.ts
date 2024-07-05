import { TestBed } from '@angular/core/testing';

import { AvantageService } from './avantage.service';

describe('AvantageService', () => {
  let service: AvantageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvantageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
