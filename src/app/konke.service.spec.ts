import { TestBed } from '@angular/core/testing';

import { KonkeService } from './konke.service';

describe('KonkeService', () => {
  let service: KonkeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonkeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
