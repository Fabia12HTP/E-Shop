import { TestBed } from '@angular/core/testing';
import { ShoesService } from './home-sevice.service';

describe('HomeSeviceService', () => {
  let service: ShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
