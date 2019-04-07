import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedGuard } from './logged.guard';

describe('LoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedGuard]
    });
  });

  it('should ...', inject([LoggedGuard], (guard: LoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
