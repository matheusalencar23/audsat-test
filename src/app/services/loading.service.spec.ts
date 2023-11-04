import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true when call start method', () => {
    spyOn((service as any)._loading, 'next');

    service.start();

    expect((service as any)._loading.next).toHaveBeenCalledWith(true);
  });

  it('should emit false when call stop method', () => {
    spyOn((service as any)._loading, 'next');

    service.stop();

    expect((service as any)._loading.next).toHaveBeenCalledWith(false);
  });
});
