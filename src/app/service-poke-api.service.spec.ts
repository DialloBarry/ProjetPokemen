import { TestBed } from '@angular/core/testing';

import { ServicePokeAPIService } from './service-poke-api.service';

describe('ServicePokeAPIService', () => {
  let service: ServicePokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
