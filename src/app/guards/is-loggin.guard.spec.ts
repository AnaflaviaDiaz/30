import { TestBed, async, inject } from '@angular/core/testing';

import { IsLogginGuard } from './is-loggin.guard';

describe('IsLogginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLogginGuard]
    });
  });

  it('should ...', inject([IsLogginGuard], (guard: IsLogginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
