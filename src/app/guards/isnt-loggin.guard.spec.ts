import { TestBed, async, inject } from '@angular/core/testing';

import { IsntLogginGuard } from './isnt-loggin.guard';

describe('IsntLogginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsntLogginGuard]
    });
  });

  it('should ...', inject([IsntLogginGuard], (guard: IsntLogginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
