import { TestBed } from '@angular/core/testing';

import { GuardcomponentService } from './guardcomponent.service';

describe('GuardcomponentService', () => {
  let service: GuardcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
