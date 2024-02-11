import { TestBed } from '@angular/core/testing';

import { HomeSeviceService } from './home-sevice.service';

describe('HomeSeviceService', () => {
  let service: HomeSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
