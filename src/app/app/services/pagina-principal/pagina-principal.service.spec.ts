import { TestBed } from '@angular/core/testing';

import { PaginaPrincipalService } from './pagina-principal.service';

describe('PaginaPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginaPrincipalService = TestBed.get(PaginaPrincipalService);
    expect(service).toBeTruthy();
  });
});
