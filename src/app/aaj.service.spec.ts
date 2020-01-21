import { TestBed } from '@angular/core/testing';

import { AajService } from './aaj.service';

describe('AajService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AajService = TestBed.get(AajService);
    expect(service).toBeTruthy();
  });
});
