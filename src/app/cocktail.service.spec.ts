import { TestBed } from '@angular/core/testing';

import { cocktailService } from './cocktail.service';

describe('HelloWorldService', () => {
  let service: cocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
